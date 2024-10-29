import React from 'react'

const SubsTableItem = ({mongoId, deleteEmail, email, date}) => {
    const emailDate = new Date(date)
  return (
    <tr className='bg-white border-b text-left'>
        <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
            {email ? email : 'No Email'} 
        </th>
        <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
        <td onClick={() => deleteEmail(mongoId)} className='px-6 py-4 pl-10 cursor-pointer'>x</td>
    </tr>
  )
}

export default SubsTableItem