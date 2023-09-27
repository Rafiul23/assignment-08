import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { useState, useEffect } from 'react';

const Statistics = () => {

    const DonationNeed = 12;

    
    const [donatedCard, setDonatedCard] = useState(0);

    useEffect(()=>{
        const donatedItems = JSON.parse(localStorage.getItem('donated'));

        if(donatedItems){
        

           const totalCard = donatedItems.length;
            setDonatedCard(totalCard);
        }
    },[]);

    const YourDonation = (donatedCard / DonationNeed) * 100;
    const TotalDonation = (100 - YourDonation);

    const data = [
        {
        name: "Your Donation",
        value: YourDonation
        },
        {
            name: "Total Donation",
            value: TotalDonation    
        }
    ];

    const colors = ['#00C49F', '#FF444A'];

    return (
       <div className='flex justify-center items-center'>
         <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
       </div>
    );
};

export default Statistics;