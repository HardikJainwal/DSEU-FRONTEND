import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, ChevronDown, X } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import DSEULOGOTHICK from "../../assets/DSEULogo/DSEULOGOTHICK.svg";
import DSEUTEXTFINAL from "../../assets/DSEULogo/DSEUTEXTFINAL.svg";
import Group24 from "../../assets/DSEULogo/Group24.svg";
import Orange from "../../assets/DSEULogo/Orange.svg";
import TopBar from "./TopBar";

const carouselImages = [
  {
    src: DSEUTEXTFINAL,
    alt: "DSEU Image 1",
  },
  {
    src: Group24,
    alt: "DSEU Image 2",
  },
  {
    src: Orange,
    alt: "DSEU Image 3",
  },
];

const navItems = [
  {
    name: "Home",
    path: "/",
    isHome: true,
  },
  {
    name: "About Us",
    dropdownItems: [
      {
        name: "About the College",
        path: "/about-us/About-the-College",
      },
      { name: "Vision and Mission", path: "/about-us/Vision-and-Mission" },
      { name: "Policy", path: "/about-us/Policy" },

      { name: "University Calendar", path: "/about-us/University-Calendar" },
      {
        name: "Annual Report",
        path: "/about-us/Annual-Report",
        dropdownItems: [
          { name: "Year-wise", path: "/about-us/Annual-Report/Year-wise" },
        ],
      },
      { name: "Handbook (Brochure)", path: "/about-us/Handbook" },
    ],
  },
  {
    name: "Academics",
    dropdownItems: [
      { name: "Programs", path: "/academics/programs" },
      { name: "Departments", path: "/academics/departments" },
      { name: "Director's Office", path: "/academics/directors-office" },
      { name: "Faculty", path: "/academics/faculty" },
      {
        name: "Student Login",
        path: "https://dseu.samarth.edu.in/index.php/site/login",
      },
    ],
  },
  {
    name: "Campuses",
    dropdownItems: [
      { name: "North", path: "/campus/north" },
      { name: "South", path: "/campus/south" },
      { name: "East", path: "/campus/east" },
      { name: "West", path: "/campus/west" },
    ],
  },
  {
    name: "Courses",
    dropdownItems: [
      { name: "Under Graduate", path: "/Courses/UG" },
      { name: "Post Graduate", path: "/Courses/PG" },
      { name: "Diploma", path: "/Courses/Diploma" },
      { name: "Certificate Courses", path: "/Courses/Certificate-Courses" },
    ],
  },
  {
    name: "Admission",
    dropdownItems: [
      {
        name: "UG Admission",
        path: "https://dseuadm.samarth.edu.in/ug/index.php/",
      },
      {
        name: "PG Admission",
        path: "https://dseuadm.samarth.edu.in/pg/index.php",
      },
      { name: "Diploma Admission", path: "https://dseuadm.samarth.edu.in/" },
    ],
  },
  {
    name: "Administration",
    dropdownItems: [
      { name: "Administrative", path: "/administration/administrative" },
      { name: "Recruitment", path: "/administration/recruitment" },
      {
        name: "Other Academic Units",
        path: "/administration/Other-Academic-Units",
      },
      { name: "Support Services", path: "/administration/Support-Services" },
    ],
  },
  {
    name: "Amenities",
    dropdownItems: [
      { name: "Facilities", path: "/amenities/Facilities" },
      { name: "Computer Centre", path: "/amenities/Computer-Centre" },
      { name: "Placement", path: "/Placement" },
      { name: "Medical Services", path: "/amenities/Medical-Services" },
      { name: "Hostels", path: "/amenities/Hostels" },
      { name: "Sports", path: "/amenities/Sports" },
      { name: "Library", path: "/amenities/Library" },
    ],
  },
  {
    name: "Alumni",
    path: "/alumni",
  },
  {
    name: "Entrepreneurship",
    path: "/entrepreneurship",
  },
  {
    name: "Research",
    dropdownItems: [
      {
        name: "Research and Development",
        path: "/research",
      },
    ],
  },
];

/* For mobile view */
const SidebarNav = ({ isOpen, onClose, navItems }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <img src={DSEULOGOTHICK} alt="DSEU Logo" className="h-12" />
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              ></button>
            </div>
            <nav className="p-4">
              {navItems.map((item) => (
                <div key={item.name} className="mb-2">
                  <div
                    onClick={() => {
                      if (!item.dropdownItems) {
                        onClose();
                      } else {
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        );
                      }
                    }}
                    className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-blue-50 cursor-pointer"
                  >
                    <Link
                      to={item.path}
                      className="flex-grow text-[#005CB9] font-medium"
                      onClick={() => !item.dropdownItems && onClose()}
                    >
                      {item.name}
                    </Link>
                    {item.dropdownItems && (
                      <ChevronDown
                        className={`ml-2 transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {item.dropdownItems && openDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-2">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-2 px-3 text-gray-600 hover:bg-blue-50 rounded-lg text-sm"
                              onClick={onClose}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-white/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl mx-auto mt-20">
        <div className="bg-white rounded-2xl shadow-2xl">
          <div className="flex items-center p-4 border-b">
            <Search className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="flex-1 px-4 py-2 text-lg focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResponsiveHeader = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 100); // Show sticky header after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Desktop Header */}

      <TopBar />
      {/* Top 3 buttons */}
      <div className="hidden md:block bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div
              onClick={() => navigate("/")}
              className="flex-shrink-0 cursor-pointer"
            >
              <img src={DSEULOGOTHICK} alt="DSEU Logo" className="h-28" />
            </div>
            <div className="relative h-32 w-64 overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full w-full"
                >
                  <img
                    src={carouselImages[currentImage].src}
                    alt={carouselImages[currentImage].alt}
                    className="w-full h-full object-contain mt-5"
                    style={{
                      width: "100%",
                      height: "70%",
                      objectFit: "contain",
                      objectPosition: "left",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Delhi+Skill+and+Entrepreneurship+University/@28.5824457,77.0600919,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1b1939555555:0x5cb3da8201a9355b!8m2!3d28.5824457!4d77.0626668!16s%2Fg%2F11jyk9d7qs?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
                "_blank"
              )
            }
          >
            <FaMapMarkerAlt className="text-4xl text-orange-500" />
            <div>
              <div className="font-medium font-inter">
                Delhi Skill and Entrepreneurship University
              </div>
              <div className="text-gray-600">
                Sector-9, Dwarka New Delhi-110077
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header with Carousel */}
      <div className="md:hidden bg-white shadow-md rounded-b-1xl">
        <div className="px-2 ">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-4">
              <img
                src={DSEULOGOTHICK}
                alt="DSEU Logo"
                className="h-16"
                onClick={() => {
                  navigate("/");
                  window.location.href = "/";
                }}
                style={{ cursor: "pointer" }}
              />
              <div className="relative h-24 w-32 overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full w-full"
                    onClick={() => {
                      navigate("/");
                      window.location.href = "/";
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={carouselImages[currentImage].src}
                      alt={carouselImages[currentImage].alt}
                      className="w-full h-full "
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  window.open("https://www.google.com/maps?q=DSEU", "_blank")
                }
                className="text-orange-500"
              >
                <FaMapMarkerAlt className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-blue-600"
              >
                <Search className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="text-blue-600"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <SidebarNav
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navItems={navItems}
        />
      </div>
      {/* Desktop Navigation Bar */}
      <div className="hidden md:block bg-blue-100 shadow-lg shadow-blue-500/50 rounded-3xl w-[96%] mx-auto my-4 sticky top-0 z-50">
        <nav className="max-w-7xl px-4 mx-auto">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-7">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="group inline-flex items-center text-base font-medium text-[#005CB9] whitespace-nowrap"
                  >
                    {item.name}
                    {item.dropdownItems && (
                      <ChevronDown className="ml-0.5 h-3 w-3" />
                    )}
                  </Link>
                  {item.dropdownItems && openDropdown === item.name && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[200px] z-50">
                      {/* Heading */}
                      <div className="bg-blue-700 text-white text-center font-semibold p-2 rounded-t-md">
                        {item.name}
                      </div>
                      {/* Dropdown Content with Inner Border */}
                      <div className="relative p-2 bg-white rounded-b-md">
                        <div className="absolute inset-1 border-2 border-blue-500 rounded-md pointer-events-none"></div>
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 text-center relative"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-[#005CB9] hover:text-blue-900 p-4"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default ResponsiveHeader;
