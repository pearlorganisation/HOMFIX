import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Dashboard from "../pages/Dashboard/Dashboard";
import News from "../pages/News/News";
import AddNews from "../pages/News/AddNews";
import EditNews from "../pages/News/EditNews";
import AddPartner from "../pages/Partner/AddPartner";
import ViewNews from "../pages/News/ViewNews";
import Press from "../pages/Insights/Press/Press";
import Podcast from "../pages/Insights/Podcast/Podcast";
import Articles from "../pages/Insights/Articles/Articles";
import AddArticle from "../pages/Insights/Articles/AddArticle";
import AddPress from "../pages/Insights/Press/AddPress";
import AddPodcast from "../pages/Insights/Podcast/AddPodcast";
// import UpdateArticle from "../pages/Insights/Press/EditPress";
import EditPodcast from "../pages/Insights/Podcast/EditPodcast";
import EditArticle from "../pages/Insights/Articles/EditArticle";
import UpdatePress from "../pages/Insights/Press/EditPress";
import ESG from "../pages/Impact/ESG";
import Mission from "../pages/Impact/Mission";
import SDG from "../pages/Impact/SDG";
import Policies from "../pages/Impact/Policies";
import AddPolicies from "../pages/Impact/AddPolicies";
import EditEsg from "../pages/Impact/EditEsg";
import EditSdg from "../pages/Impact/EditSdg";
import EditPolicies from "../pages/Impact/EditPolicies";
import EditMission from "../pages/Impact/EditMission";

import FocusArea from "../pages/FocusArea/FocusArea";
import AddFocusArea from "../pages/FocusArea/AddFocusArea";
import EditFocusArea from "../pages/FocusArea/EditFocusArea";
import ViewFocusArea from "../pages/FocusArea/ViewFocusArea";
import FocusAreaFeature from "../pages/FocusArea/FocusAreaFeature";
import AddFocusAreaFeature from "../pages/FocusArea/AddFocusAreaFeature";
import EditFocusAreaFeature from "../pages/FocusArea/EditFocusAreaFeature";
import ViewFocusAreaFeature from "../pages/FocusArea/ViewFocusAreaFeature";
import Portfolio from "../pages/Portfolio/Portfolio";
import ViewPortfolio from "../pages/Portfolio/ViewPortfolio";
import ListPortfolioCards from "../pages/Portfolio/ListPortfolioCards";
import ListInvestmentTimeline from "../pages/Portfolio/ListInvestmentTimeline";
import ListInvestmentCards from "../pages/Portfolio/ListInvestmentCards";
import ViewPortfolioCard from "../pages/Portfolio/ViewPortfolioCard";
import EditPortfolioCard from "../pages/Portfolio/EditPortfolioCard";
import ViewInvestmentCard from "../pages/Portfolio/ViewInvestmentCard";
import EditInvestmentCard from "../pages/Portfolio/EditInvestmentCard";
import AddPortfolioCard from "../pages/Portfolio/AddPortfolioCard";
import AddInvestmentTimelineCard from "../pages/Portfolio/AddInvestmentTimelineCard";
import AddInvestmentTimeline from "../pages/Portfolio/AddInvestmentTimeline";
import AddCoinvestor from "../pages/Portfolio/AddUpdateListCoinvestor";
import ContactUs from "../pages/ContactUs/ContactUs";
import TeamDetails from "../pages/Partner/TeamDetails";
import AddTeamDetails from "../pages/Partner/AddTeamDetails";
import ViewTeamDetails from "../pages/Partner/ViewTeamDetails";
import EditTeamDetails from "../pages/Partner/EditTeamDetails";
import EditInvestmentTimeline from "../pages/Portfolio/EditInvestmentTimeline";
import ViewInvestmentTimeline from "../pages/Portfolio/ViewInvestmentTimeline";
import AddPortfolio from "../pages/Portfolio/AddPortfolio";
import EditPortfolio from "../pages/Portfolio/EditPortfolio";
import Login from "../pages/Login/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Profile from "../pages/Profile/Profile";
import EditPartner from "../pages/Partner/EditPartner";
import Viewpartner from "../pages/Partner/ViewPartner";
import Partner from "../pages/Partner/Partner";

const Routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/add-news",
        element: <AddNews />,
      },
      {
        path: "/news/view-news/:id",
        element: <ViewNews />,
      },
      {
        path: "/news/edit-news/:id",
        element: <EditNews />,
      },
      {
        path: "/partner",
        element: <Partner />,
      },

      {
        path: "/partner/add-partner",
        element: <AddPartner />,
      },
      {
        path: "/partner/edit-partner/:id",
        element: <EditPartner />,
      },
      {
        path: "/partner/view-partner/:id",
        element: <Viewpartner />,
      },

      {
        path: "/teamDetails",
        element: <TeamDetails />,
      },

      {
        path: "/teamDetails/add-teamDetails",
        element: <AddTeamDetails />,
      },
      {
        path: "/teamDetails/edit-teamDetails/:id",
        element: <EditTeamDetails />,
      },
      {
        path: "/teamDetails/view-teamDetails/:id",
        element: <ViewTeamDetails />,
      },

      {
        path: "/press",
        element: <Press />,
      },
      {
        path: "/podcast",
        element: <Podcast />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/add_article",
        element: <AddArticle />,
      },
      {
        path: "/add_podcast",
        element: <AddPodcast />,
      },
      {
        path: "/add_press",
        element: <AddPress />,
      },
      {
        path: "/focusarea",
        element: <FocusArea />,
      },
      {
        path: "/focusarea/add-focusarea",
        element: <AddFocusArea />,
      },
      {
        path: "/focusarea/edit-focusarea/:id",
        element: <EditFocusArea />,
      },
      {
        path: "/focusarea/view-focusarea/:id",
        element: <ViewFocusArea />,
      },
      {
        path: "/focusareafeature",
        element: <FocusAreaFeature />,
      },
      {
        path: "/focusarea/add-focusareafeature",
        element: <AddFocusAreaFeature />,
      },
      {
        path: "/focusarea/edit-focusareafeature/:id",
        element: <EditFocusAreaFeature />,
      },
      {
        path: "/focusarea/view-focusareafeature/:id",
        element: <ViewFocusAreaFeature />,
      },

      {
        path: "/edit-press/:id",
        element: <UpdatePress />,
      },
      {
        path: "/edit-article/:id",
        element: <EditArticle />,
      },
      {
        path: "/edit-podcast/:id",
        element: <EditPodcast />,
      },
      {
        path: "/portfolios",
        element: <Portfolio />,
      },

      {
        path: "/portfolio/view-portfolio/:id",
        element: <ViewPortfolio />,
      },

      {
        path: "/portfolios/portfolio-cards",
        element: <ListPortfolioCards />,
      },

      {
        path: "/portfolios/invest-timeline-cards",
        element: <ListInvestmentCards />,
      },

      {
        path: "/portfolios/invest-timelines",
        element: <ListInvestmentTimeline />,
      },

      {
        path: "/portfolios/view-portfolio-cards/:id",
        element: <ViewPortfolioCard />,
      },

      {
        path: "/portfolios/edit-portfolio-cards/:id",
        element: <EditPortfolioCard />,
      },

      {
        path: "/portfolios/view-invest-timeline-cards/:id",
        element: <ViewInvestmentCard />,
      },

      {
        path: "/portfolios/edit-invest-timeline-cards/:id",
        element: <EditInvestmentCard />,
      },

      {
        path: "/portfolios/edit-invest-timeline/:id",
        element: <EditInvestmentTimeline />,
      },

      {
        path: "/portfolios/view-invest-timeline/:id",
        element: <ViewInvestmentTimeline />,
      },

      {
        path: "/portfolios/add-portfolio-card",
        element: <AddPortfolioCard />,
      },

      {
        path: "/portfolios/add-investment-timeline-card",
        element: <AddInvestmentTimelineCard />,
      },
      {
        path: "/portfolios/add-investment-timeline",
        element: <AddInvestmentTimeline />,
      },
      {
        path: "/portfolios/add-coinvestor",
        element: <AddCoinvestor />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/portfolios/add-portfolio",
        element: <AddPortfolio />,
      },
      {
        path: "/portfolio/edit-portfolio/:id",
        element: <EditPortfolio />,
      },
      {
        path: "/esg",
        element: <ESG />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
      {
        path: "/sdg",
        element: <SDG />,
      },
      {
        path: "/policies",
        element: <Policies />,
      },
      {
        path: "/add-policies",
        element: <AddPolicies />,
      },
      {
        path: "/edit-esg/:id",
        element: <EditEsg />,
      },
      {
        path: "/edit-sdg/:id",
        element: <EditSdg />,
      },
      {
        path: "/edit-policies/:id",
        element: <EditPolicies />,
      },
      {
        path: "/edit-mission/:id",
        element: <EditMission />,
      },
    ],
  },
]);

export default Routes;
