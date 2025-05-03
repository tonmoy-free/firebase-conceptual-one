import React from 'react';
import Banner from '../../components/Banner/Banner';
import SingleCard from '../../components/SingleCard/SingleCard';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <Banner></Banner>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    data.map(car => <SingleCard key={car.vehicle.id} car={car}></SingleCard>)
                }
            </div>


        </>
    );
};

export default Home;