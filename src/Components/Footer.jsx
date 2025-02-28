import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex gap-6 font-lato text-gray-400">
        <li>
          <a href="a">Facebook</a>
        </li>
        <li>
          <a href="a">Instagram</a>
        </li>
        <li>
          <a href="a">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src="./assets/Help-Avatar.svg" alt="help"></img>
        <div>
          <p className="font-playfair font-thin">Have Any Questions</p>
          <a href="a" className="font-lato font-medium">Talk to a Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
