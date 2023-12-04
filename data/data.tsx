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
  { name: 'Dashboard', href: '/app/admin', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/app/admin/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/app/admin//teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/app/admin/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/app/admin/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/app/admin/account', icon: <MdOutlineManageAccounts/>}
]
export const StudentNavigations = [
  { name: 'Dashboard', href: '/app/student', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/app/student/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/app/student/teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/app/student/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/app/student/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/app/student/account', icon: <MdOutlineManageAccounts/>}
]
export const TeacherNavigations = [
  { name: 'Dashboard', href: '/app/teacher', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/app/teacher/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/app/teacher/teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/app/teacher/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/app/teacher/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/app/teacher/account', icon: <MdOutlineManageAccounts/>}
]
export const ParentNavigations = [
  { name: 'Dashboard', href: '/app/parent', icon: <MdOutlineDashboard /> },
  { name: 'Students', href: '/app/parent/students', icon: <PiStudentBold /> },
  { name: 'Teachers', href: '/app/parent/teachers', icon: <PiChalkboardTeacher /> },
  { name: 'Parents', href: '/app/parent/parents', icon: <RiGroupLine /> },
  { name: 'Staffs', href: '/app/parent/staffs', icon: <GrUserWorker /> },
  { name: 'Account', href: '/app/parent/account', icon: <MdOutlineManageAccounts/>}
]