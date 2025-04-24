import mongoose from "mongoose";

import {
  deleteFileFromCloudinary,
  uploadFileToCloudinary,
} from "../utils/cloudinaryConfig.js";
import ApiErrorResponse from "../utils/errors/ApiErrorResponse.js";
import { asyncHandler } from "../utils/errors/asyncHandler.js";
import Partners from "../models/partners.js";

export const getAllPartners = asyncHandler(async (req, res, next) => {
  const partners = await Partners.find();

  if (!partners || partners.length === 0) {
    return next(new ApiErrorResponse("No Partners found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "All partners found successfully",
    // pagination, // Include pagination metadata
    length: partners.length,
    data: partners,
  });
});

export const getSinglePartner = asyncHandler(async (req, res, next) => {
  const partner = await Partners.findById(req.params.id);

  if (!partner) {
    return next(new ApiErrorResponse("partner not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "partner found successfully",
    data: partner,
  });
});

export const deletePartner = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const partner = await Partners.findByIdAndDelete(id);
  if (!partner) {
    return next(new ApiErrorResponse("partner not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "partner deleted successfully",
  });
});

export const createPartner = asyncHandler(async (req, res, next) => {
  const { image } = req.files;

  const uploadedImage = image ? await uploadFileToCloudinary(image) : null;

  const partnerInfo = await Partners.create({
    ...req.body,
    image: uploadedImage[0],
  });

  if (!partnerInfo) {
    return next(new ApiErrorResponse("Partner creation failed", 400));
  }

  return res.status(201).json({
    success: true,
    message: "Partner created successfully",
    data: partnerInfo,
  });
});

export const updatePartner = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image } = req.files || {};

  const partner = await Partners.findById(id);

  if (!partner) {
    return next(new ApiErrorResponse("Partner not found", 404));
  }

  let updatedImage = partner.image;
  if (image) {
    updatedImage = await uploadFileToCloudinary(image);
  }

  //   console.log(updatedImage, "Updated Image");
  //   console.log(req.body, "Req Body");

  const updatedPartner = await Partners.findOneAndUpdate(
    { _id: new mongoose.Types.ObjectId(`${id}`) },

    {
      ...req.body,
      image: updatedImage[0],
    },
    { new: true }
  );

  if (!updatedPartner) {
    return next(new ApiErrorResponse("Partner update failed", 400));
  }

  return res.status(200).json({
    success: true,
    message: "Partner updated successfully1234",
    data: updatedPartner,
  });
});
