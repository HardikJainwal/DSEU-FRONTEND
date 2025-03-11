import { BrowserRouter, Routes, Route } from "react-router-dom";

import MidNavbar from "./Component/Header/MidNavbar";
import Footer from "./Component/Footer/Footer";

import HomeBody from "./Component/Body/Banner";
import OurCampuses from "./Component/Body/OurCampuses";
import Message from "./Component/Body/Message";
import Announcements from "./Component/Body/Announcements";
import Card from "./Component/Body/Card";
import News from "./Component/Body/News";
import OurPartners from "./Component/Body/OurPartners";
import ViceChancellorMessage from "./Component/Body/ViceChancellorMessage";
import StudyProgramsSection from "./Component/Body/StudentProgram";
import EventsAndActivities from "./Component/Body/StudentEvents";
import Administration from "./Component/Body/Administration";
import DepartmentPage from "./Component/Body/DepartmentPage";
import ListOfFaculties from "./Component/Body/ListOfFaculties";
import FacultyDesc from "./Component/Body/FacultyDesc";
import ResearchDev from "./Component/Body/ResearchDev";

// courses
import UGPrograms from "./Component/Courses/UGPrograms";
import PGPrograms from "./Component/Courses/PGProgram";
import DiplomaPrograms from "./Component/Courses/Diploma";
import CertificateCourses from "./Component/Courses/CertificateCourses";
import CourseStructure from "./Component/Courses/CourseStructure";

// policies
import Policy from "./Component/Policy/Policy";
import AcademicGuidelines from "./Component/Policy/AcademicGuidelines";
import AdmissionsPolicy from "./Component/Policy/AdmissionsPolicy";
import AntiRaggingPolicy from "./Component/Policy/AntiRaggingPolicy";
import CodeOfConduct from "./Component/Policy/CodeOfConduct";
import Facilities from "./Component/Policy/Facilities";
import SupportServices from "./Component/Policy/SupportServices";

// Campuses
import North from "./Component/Campuses/North";
import South from "./Component/Campuses/South";
import East from "./Component/Campuses/East";
import West from "./Component/Campuses/West";

import BPIBS from "./Component/AllCampusesPage.jsx/BPIBS";
import MayurVihar from "./Component/AllCampusesPage.jsx/MayurVihar";
import ShakarpurDSEU from "./Component/AllCampusesPage.jsx/Shakarpur";
import VivekVihar from "./Component/AllCampusesPage.jsx/VivekVihar";

import About from "./Component/NavItems/About";
import VissionMission from "./Component/NavItems/Vission&Mission";
import Entrepreneurship from "./Component/NavItems/Entrepreneurship";
import Amenities from "./Component/NavItems/Amenities";
import Placement from "./Component/NavItems/Placement";
import DirectorsOffice from "./Component/NavItems/DirectorsOffice";
import JobPortal from "./Component/Body/JobPortal";
import AlumniSection from "./Component/Alumni Page/AlumniSection";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MidNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeBody />
              <Announcements />
              <Message />
              <Card />
              <StudyProgramsSection />
              <OurCampuses />
              <OurPartners />
              <News />
              <EventsAndActivities />
            </>
          }
        />
        <Route path="/campus/north" element={<North />} />
        <Route path="/campus/south" element={<South />} />
        <Route path="/campus/east" element={<East />} />
        <Route path="/campus/west" element={<West />} />
        <Route path="/courses/ug" element={<UGPrograms />} />
        <Route path="/courses/pg" element={<PGPrograms />} />
        <Route
          path="/courses/Certificate-Courses"
          element={<CertificateCourses />}
        />
        <Route path="/courses/diploma" element={<DiplomaPrograms />} />
        <Route path="/courses/diploma" element={<UGPrograms />} />
        <Route path="/academics/faculty" element={<ListOfFaculties />} />
        <Route
          path="/academics/directors-office"
          element={<DirectorsOffice />}
        />
        <Route path="/dept/:departmentPath" element={<DepartmentPage />} />
        <Route
          path="/course-structure/:programCode"
          element={<CourseStructure />}
        />
        <Route
          path="/Administration/administrative"
          element={<Administration />}
        />
        <Route path="/faculty/:facultyId" element={<FacultyDesc />} />
        <Route path="/alumni" element={<AlumniSection />} />
        <Route path="/administration/recruitment" element={<JobPortal />} />
        <Route path="/about-us/About-the-College" element={<About />} />
        <Route
          path="about-us/Vision-and-Mission"
          element={<VissionMission />}
        />
        <Route path="about-us/Policy" element={<Policy />} />
        <Route
          path="about-us/policy/academic-policy"
          element={<AcademicGuidelines />}
        />
        <Route
          path="about-us/policy/anti-ragging-policy"
          element={<AntiRaggingPolicy />}
        />
        <Route
          path="about-us/policy/admission-policy"
          element={<AdmissionsPolicy />}
        />
        <Route path="about-us/policy/facilities" element={<Facilities />} />
        <Route
          path="about-us/policy/support-services"
          element={<SupportServices />}
        />
        <Route
          path="about-us/policy/code-of-conduct"
          element={<CodeOfConduct />}
        />
        <Route path="/vice-chancellor" element={<ViceChancellorMessage />} />
        <Route path="/entrepreneurship" element={<Entrepreneurship />} />
        <Route path="/amenities/Facilities" element={<Amenities />} />
        <Route path="/research/*" element={<ResearchDev />} />
        <Route path="/BPIBS" element={<BPIBS />} />
        <Route path="/MayurVihar" element={<MayurVihar />} />
        <Route path="/shakarpur2" element={<ShakarpurDSEU />} />
        <Route path="/vivekvihar" element={<VivekVihar />} />
        <Route path="/Placement" element={<Placement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
