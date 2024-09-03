import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Head from 'next/head'

const pricingData = [
    {
      title: 'Basic',
      description: 'Perfect for small teams',
      price: 'Starts at $99/month',
      features: ['Feature 1', 'Feature 2'],
      footer: 'Footer content for Basic plan',
    },
    {
      title: 'Pro',
      description: 'Ideal for growing businesses',
      price: 'Starts at $199/month',
      features: ['Feature 1', 'Feature 2'],
      footer: 'Footer content for Pro plan',
    },
    {
      title: 'Enterprise',
      description: 'Tailored solutions for large organizations',
      price: 'Contact us for pricing',
      features: ['Feature 1', 'Feature 2'],
      footer: 'Footer content for Enterprise plan',
    },
  ];

function Pricingcard() {

    return (
        <div className="mt-20 min-h-screen bg-white">
          <Head>
            <title>Chat Bot Pricing - YourCompany</title>
            <meta name="description" content="Pricing for our Chat Bot services" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Pricing Plans</h1>
    
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
             
              {pricingData.map((pricing, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{pricing.title}</CardTitle>
                    <CardDescription>{pricing.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-900">{pricing.price}</p>
                    <ul className="mt-4 space-y-2">
                      {pricing.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                         
                          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.293-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414l2.293-2.293 5 5a1 1 0 001.414-1.414l-6-6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-600">{pricing.footer}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>
      );
    }
    
    export default Pricingcard;