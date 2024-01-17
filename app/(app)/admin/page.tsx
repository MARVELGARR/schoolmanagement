'use client'
import UserCount from "@/components/MarvelComponents/adminComponents/adminDashboard/LeftDashBoard/userCounts/useCount";
import Header from "@/components/MarvelComponents/headerComponents/header";
import UserPercentage from "@/components/MarvelComponents/userPercentage";
import { useUser } from "@/hooks/useUsers";
import { useEffect } from "react";
import Chart from "react-google-charts";




export default function AdminDashboard(){

    const  users  = useUser((state)=> state.users);
    const  getAllUsers  = useUser((state)=> state.getAllUsers);
    
    useEffect(()=>{
        getAllUsers()
    },[])
    
    const chartData = [
        
        ['Gender', 'Count'],
        ['student', users.students.length],
        ['parents', users.parents.length],
        ['teachers', users.teachers.length],
    ];
    const options={
          title: 'Population of users',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'count',
            minValue: 0,
            maxValue: 0,
          },
          vAxis: {
            title: 'gender',
          },

          bar: { width: '40px' },
    }
    return (
        <div className="w-full h-full">
            <title>Dashboard</title>
            <section className='w-full'>
                <Header className='h-[5rem]' name='Dashboard'/>
            </section>
            <div className="AdminHero flex item-center">
            <div className="flex flex-col items-center gap-10">

                <section className="">
                    <UserCount className='px-[1rem]'/>
                </section>
                <section className="flex items-center">
                    <section className="left">
                        <Chart
                            chartType="Bar"
                            data={chartData}
                            options={options}
                            width="100%"
                            height="400px"
                            legendToggle
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </section>
                    <section className="right">
                        <UserPercentage
                            name={''}
                            users={users}
                        />
                    </section>
                </section>
            </div>
            </div>
        </div>
    );
}
