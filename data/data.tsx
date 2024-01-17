import { MdOutlineDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GrBook } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";

export const navigations = [
  { name: 'Dashboard', href: '/app', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/app/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/app/teacher', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/app/parent', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/app/staff', icon: <GrUserWorker /> },
  { name: 'Account', href: '/app/account', icon: <MdOutlineManageAccounts/>}
]
export const AdminNavigations = [
  { name: 'Dashboard', href: '/admin', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/admin/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/admin//teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/admin/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/admin/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/admin/account', icon: <MdOutlineManageAccounts/>}
]
export const StudentNavigations = [
  { name: 'Dashboard', href: '/student', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/student/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/student/teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/student/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/student/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/student/account', icon: <MdOutlineManageAccounts/>}
]
export const TeacherNavigations = [
  { name: 'Dashboard', href: '/teacher', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/teacher/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/teacher/teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/teacher/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/teacher/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/teacher/account', icon: <MdOutlineManageAccounts/>}
]
export const ParentNavigations = [
  { name: 'Dashboard', href: '/parent', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/parent/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/parent/teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/parent/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/parent/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/parent/account', icon: <MdOutlineManageAccounts/>}
]