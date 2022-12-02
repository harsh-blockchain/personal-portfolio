import React from 'react'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.line} />
        <div className='flex flex-col max-w-7xl mx-auto w-full'>

        <div className='flex items-center justify-between pt-16 pb-2'>
        <div className={styles.right}>
            <div className={styles.button}>
                <div>Home</div>
            </div>
            <div className={styles.button}>
                <div>About</div>
            </div>
            <div className={styles.button}>
                <div>Portfolio</div>
            </div>
            <div className={styles.button}>
                <div>Services</div>
            </div>
            <div className={styles.button}>
                <div>
                Contact
                </div>
            </div>

        </div>
            <div className={styles.declare}>Created by Harsh</div>
        </div>
        <div className={styles.line} />
        <div className={styles.declare}>© Copyright 2022 - Developed by Harsh Bardhan. All right reserved.</div>

        </div>
    </div>
  )
}

export default Footer

const styles = {
    wrapper: `flex flex-col items-center justify-center py-4 pb-8`,
    line: `bg-gray-700 h-[1px] w-full flex`,
    declare: `text-md text-center py-3 font-semibold font-Sans-serif mt-4 mb-0`,
    right: `flex space-x-4 text-lg items-center font-semibold font-Sans-serif hidden md:flex`,
    button:`flex hover:scale-105 transform transition duration-300 ease-in-out hover:bg-[#01d293] bg-[#0e1630] text-white px-4 py-2 rounded-xl items-center space-x-2 cursor-pointer`,
}