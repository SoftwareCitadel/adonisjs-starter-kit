import React from 'react'

const faqData = [
  {
    question: 'What is Panache?',
    answer:
      'Panache is a comprehensive suite of productivity tools including email, file storage, team collaboration, calendar, and more.',
  },
  {
    question: 'How do I create a Panache account?',
    answer:
      "To create a Panache account, visit our sign-up page and follow the instructions. You'll need to provide some basic information and choose a unique username.",
  },
  {
    question: 'Is Panache free to use?',
    answer:
      'Panache offers both free and premium plans. The free plan includes basic features, while premium plans offer additional storage, advanced features, and priority support.',
  },
  {
    question: 'Can I use Panache for my business?',
    answer:
      'Absolutely! Panache offers business plans with advanced features tailored for team collaboration, increased storage, and dedicated support.',
  },
]

const FAQ = () => {
  return (
    <div className="bg-white text-black border-y py-24 sm:py-28 px-4 sm:px-0">
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

export default FAQ
