import React from 'react';
import { useEffect } from 'react';
import ExchangeCard from './ExchangeCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllExchanges } from '@/redux/features/exchange/exchangeThunk';
const ExchangeToolList = () => {
    const dispatch = useDispatch();
    const { loading, exchangeTools, searchTool } = useSelector(state => state.exchange);

    useEffect(() => {
        if (!searchTool) {
            dispatch(fetchAllExchanges());
        }
    }, [dispatch, searchTool]);
    if (loading) return (<p>loading</p>)
    return (
        <div className="min-h-screen px-8 py-10">
            <h1 className="text-4xl my-12 sm:pl-8 md:pl-16">Tools</h1>
            <div className="flex flex-wrap justify-center items-start gap-5">
                {exchangeTools.map((tool) => (
                    <ExchangeCard key={tool._id} id={tool._id} imageSrc={tool.images[0]} {...tool} />
                ))}
            </div>
        </div>
    );
};

export default ExchangeToolList;
