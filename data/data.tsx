import { MdOutlineDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GrBook } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";

export const navigations = [
  { name: 'Dashboard', href: '/app/dashboard', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/app/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/app/teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/app/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/app/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/app/account', icon: <MdOutlineManageAccounts/>}
]