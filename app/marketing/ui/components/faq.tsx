import React from 'react'

export default function Faq() {
  const faqData = [
    {
      question: `What is ${import.meta.env.VITE_APP_NAME}?`,
      answer: `${import.meta.env.VITE_APP_NAME} is a comprehensive suite of productivity tools including email, file storage, team collaboration, calendar, and more.`,
    },
    {
      question: `How do I create a ${import.meta.env.VITE_APP_NAME} account?`,
      answer: `To create a ${import.meta.env.VITE_APP_NAME} account, visit our sign-up page and follow the instructions. You'll need to provide some basic information and choose a unique username.`,
    },
    {
      question: `Is ${import.meta.env.VITE_APP_NAME} free to use?`,
      answer: `${import.meta.env.VITE_APP_NAME} offers both free and premium plans. The free plan includes basic features, while premium plans offer additional storage, advanced features, and priority support.`,
    },
    {
      question: `Can I use ${import.meta.env.VITE_APP_NAME} for my business?`,
      answer: `Absolutely! ${import.meta.env.VITE_APP_NAME} offers business plans with advanced features tailored for team collaboration, increased storage, and dedicated support.`,
    },
  ]

  return (
    <div className="text-black border-y py-24 sm:py-28 px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <details key={index} className="border-b border-neutral-200 py-4 last:border-b-0">
            <summary className="text-left hover:text-neutral-600 transition-colors cursor-pointer font-semibold">
              {faq.question}
            </summary>
            <p className="mt-2 text-neutral-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
