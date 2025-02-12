import React from 'react';
import ExchangeCard from './ExchangeCard';

const ExchangeToolList = () => {
    const exchangeTools = [
        {
            id: 1,
            publisher: 'Dr Mahmoud',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 27,
            publisher: 'Dr Mahmoud',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 35,
            publisher: 'Dr Ahmed',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 33,
            publisher: 'Dr Ahmed',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 30,
            publisher: 'Dr Ahmed',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 4,
            publisher: 'Dr Ahmed',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 5,
            publisher: 'Dr Ahmed',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 6,
            publisher: 'Dr Ahmed',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 7,
            publisher: 'Dr Ahmed',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
        {
            id: 8,
            publisher: 'Dr Ahmed',
            name: 'Canines',
            exchangeWith: 'Second Molar',
            notes: 'The tooth has a cavity.',
            contact: '9565421515',
            date: '12/10/2025',
        },
    ];

    return (
        <div className="min-h-screen px-5 py-10">
            <h1 className="text-4xl my-12 sm:pl-10 md:pl-20">Tools</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {exchangeTools.map((tool) => (
                    <ExchangeCard key={tool.id} {...tool} />
                ))}
            </div>
        </div>
    );
};

export default ExchangeToolList;
