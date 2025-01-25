import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-48 px-44 bg-gray-50">
      <div className="text-lg font-semibold text-blue-600">ChatBot</div>
      <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border rounded-lg border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="roll no" className="block text-sm font-medium text-gray-700">Roll No</label>
            <input
              id="roll no"
              type="number"
              
              placeholder="Enter your roll no"
              className="mt-1 p-2 w-full border rounded-lg border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="Github Link" className="block text-sm font-medium text-gray-700 ">Github Link</label>
            <input
              id="Github Link"
              type="link"
              
              placeholder="Enter your roll no"
              className="mt-1 p-2 w-full border rounded-lg border-gray-300"
            />
          </div>
      <button
           
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 mt-6"
          >
            Send
          </button>
          
    </div>
  )
}

export default page