import React from 'react'

const ProfileLayout = ({children}: {children: JSX.Element}) => {
  return (
    <main className='w-2/3 mx-auto py-10 min-h-screen' >
      
      
      {children}

      <footer className='p-4 fixed bottom-0 w-full bg-primary text-ij-white left-0' >
        <div className='flex flex-col items-center justify-center'>
          <span>powered by</span>
          <a href="https://www.infojobs.es">InfoJobs</a>
        </div>
      </footer>
    
    </main>
  )
}

export default ProfileLayout