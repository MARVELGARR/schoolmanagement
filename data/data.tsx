import { MdOutlineDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GrBook } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";

export const navigations = [
  { name: 'Dashboard', href: '/dashboard', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/staff', icon: <GrUserWorker /> },
  { name: 'Account', href: '/account', icon: <MdOutlineManageAccounts/>}
]