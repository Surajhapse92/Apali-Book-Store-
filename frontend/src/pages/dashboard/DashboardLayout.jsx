import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Loading from '../../components/Loading';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";

const DashboardLayout = () => {
  
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/")
  }

  return (
    <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
    <aside className="hidden sm:flex sm:flex-col">
      <a href="/" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
        <img src="/fav-icon.png" alt="" />
      </a>
      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <nav className="flex flex-col mx-4 my-6 space-y-4">
          <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Folders</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </a>
          <Link to="/dashboard" className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg">
            <span className="sr-only">Dashboard</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </Link>
          <Link to="/dashboard/add-new-book" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Add Book</span>
            <HiViewGridAdd className="h-6 w-6"/>
          </Link>
          <Link to="/dashboard/manage-books" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Documents</span>
            <MdOutlineManageHistory className="h-6 w-6"/>
          </Link>
        </nav>
        <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
          <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Settings</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
    <div className="flex-grow text-gray-800">
      <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
        <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
          <span className="sr-only">Menu</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div className="relative w-full max-w-md sm:-ml-2">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
        </div>
        <div className="flex flex-shrink-0 items-center ml-auto">
          <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
            <span className="sr-only">User Menu</span>
            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <span className="font-semibold">ADMIN</span>
              <span className="text-sm text-gray-600">Profile</span>
            </div>
            <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABtlBMVEVx4u////84xtknO3oSEUn/7bUoKCboz4lJSUjZ7eypv7780Ijdq2KOpaK3zsw4aJXt1ZMvLy4rRYBo4e5R0eIqX5EcMXdv3ewpP3yxysoSD0qDnKA2uM8XG1R34/DB8feU3tl/wbnjs2uw7vXiqluV6fPo+vz1/f4AAENHPTr/87kAADyG5vHZ9/rA8fcnHxun7PUPAD9ktL1AQUMVGR8ixd3M6czQ5OMAADZNh41XgYYjEwxBZ2pUd3swcHjm16a1qociJCgACxrg6sPy0IPz7Lr+46YgKXGHnaswT4dMUlI8VFVVmqJkwctOYGEiDQAwPDxdmqEhAQA2S0xbkZczp7Y0j5wrMjEpHBY0g46elXnVxptdW1OLhG5iqrJxbV+pn4CQhGFvZUhSTTzLtnuhkma2o3DdxoQKABGTz77U0Zmp5tygzrRwy8u1z6vW0Zj/zn+Sxsvo4cPCvKPe6d6zv7Zgs8tOjbDr3rstkKojXoAsfptfutFCeaKNn7dYZH0bQmpugKMZL19HUG9nf5NVZ5QmK1meucAqg6EXJ1uDlrB8kZdkeJrE1uLQ4OpCUHR8f5eiorDn539KAAAPdUlEQVR4nM3dC1dbVRYA4JuEAqU8WgIJpJIoMQ+aBMJL+xzaDi2lFdGxOrVandpqRx0f44xisW+tGRBa+cdz7s3rPs5j73P2hey1XMulawHf2vvss+/NvTlWJPQo5CuZ6Ww1Vy6X0+m0xf5h/5arZqczlXwh/F9vhfizGS2bK6fjTlj+qP/ndDmXDRcaljCfqTq2ACwYjrOayYf0l4QhzGdyaQti8zitdC4UJbWwUKmmQZnjZzNdrVBXLKmwkMmhcxfMZS5DiiQUEvDaSLo/i0qYr2rXJhcZr1KtSRJhIVOm5DWQZZpqJRDms0TVGTBaWYJEGgvzVKuPb8wZGw2FlRDK04csVw5QmM+F7XOMZnk0EO6Pz9ioLSxU98vnGKvafVVXmAmxv3CJlu4QoCcMv8FwjJotR0u4rwXqMlb3SVjZ5wJ1ES2NNKKF+9thAkZ8x8EKK+mDBDJiGptGpDB7sD7HmA1RmD+AFhqMeBm1/2OElYO2tQJTqQjhdCcksB7x6TCE+zaFQiKeIxcWDriH+iOehm4bQGE+fdCkQKSB/QYm7Jwe4w5YvwEJM51Voc2Igy43IMIOaqLeALVUgLBjgTCiWtgBg5o4ACOcUtjRQAhRJezgEq2HslAVwo4HqolyId02kZy7fu5q79RUb/exa6feWqP6sXYoNg2psEIFnDs3xXBOHOuemTmzfubsqbUk0Q+34tKtXybME/0Fa283dHWhEzMz6++cIkulbICTCAtEs+gpl68ldJQ33nuL5lfIxnCJkAh4zgN0C1mc6f6E5JekdYRE14OnvUCfsLt7/b05gt8iuV4UCon2iTkfMCBkebxGsB7Fe4ZISNRGk73+CAq7Z86cNTcKG6pASNVG3/WnkCdkxr8RGAUNVSAsE+jsuArJoWNcv2a6HssYofm4vTb37vXTp08HgCKhXavvXDcaAgRDOFdougjnTrP5bCpQoHIhixvrRsXKX4o8odlWn3z3Kt+mFtrF+t5b+onkbvw8odGnS3NSn0rYbQ8BZ3VXJPcDRo7QqEavy30Aob0ij53Tq1ZenXKEBj7/iKYndKp1Rm8uhwhNatQ/omkLu+tLEv0HcOo0IDSpUWWJYoTM2D2CJwbqNCA02OvXAECMsPvG+3hiYN/3C03uW7wNAOKEH0TRxMA9DZ+woO+zPoGkECWcORvFE62CVGjSZkApxAmvRfFEf7PxCvMGwMCVoLmw++9RHWJeIszpA61zICBOeOMVHWJOLDRJYRKWQpzwzPtRDaI3iR6hSQqBRYrM4QdRHWJOJAx3INUSfhjVIXq2fbfQ6MIe1kmRwpm/RLWIZb7QZBVaFhCoK8QR3SvRJTRZhbCJzUSII+Z4QrPba7CBxkSII+Y5QrO7T5x7TtRCDNF1V6olNJlIWZzdByEqi4WA0PDDUGgrNRIiiO1LjJbQ7B5wMnjrl0T4YVSXWPYLzbYKaw0K1JtpNIitDaMprBoB4ZuF1lyqRaz6hKZ3uT3CeTsohOuvBIRgYtwrNH3owi2c77350dLS+Y/5Ro2rJz1is9dYBPOMVzh/69CJE4cOnTh0i0vEXwHrEnNuoeFm6B5p5s8znhMnzvNKFX0XQ59YcAmNnwxqCec/agIZcenTIBEl/AtfCCM2ytQiKdKWsJ1Bh3jofK/fiLtfKhDCiLm20LhIm+tw/qYb6Bhv+koVlUOhEEYstITmjyXU98P5T31Ap1RvefKIEb4jBIKI9Ut9i2C7bwl7lwJAx/iPq/M6QuEyhBKrLaH500+O0LsIvevx42axIoSciQZHTDeFhjOpHUlBjbaMJ5ZufuwMOgjhDSkQQHRmU4tir7Ccq6f5JbGwjjz/ae/8hQs0RQohOvuFRbFXOML5W1JgA7l0+7OphYsLCwHnhQsLCxcvHrsz1fp/6/IihRBzDSHFQ4inBW0mgDza03Pv7ue3P7tz7MLFVixcmLpz+/bnd+/dY//3izsXnRQKBhoMMV0Xkjzh9cmUfysUBBO6wiYF4+7UgrLPwIh5R0jyMPfaPCiFfqEobi+AUqgi2gvRotgN7Z+lXoUYYc8X/wSlUEWsOkKKp/TiX1+CAaHCnntfAoVSYtkWkjzO/VegDy7sWf6KgJguMCHBfh+HA+FCRlw0JrI936J4GvhVOBAh7Fn+xjiLbPi2CJ4lxaQQI+wBJ1FIjGeZkGCiQQBRwp4RqFBIzDGheSvFFClKCC9TIbHMhMatNP51aELwjiEkpiNWwXwZhif8F3ghiojxgmW+WYQn7EEJucR43jLfLDqkSvnEeMUyn7tDFL6GE3KI8YxF8H5TObQqRfRSATE+bVG8qx2aEAsMEuNZi+DaqQNmGjGxahGMNKiFiJlLkY2GS8xZJFeHIQl1gH5imUb4RijCbzWKNECkEVrpUITwuVtCLFsk7zMjViL8Gv9LzRR6iWkaIaJOoUL4TQw5kUoI3zGAwuXvTIAuIt0XXEGzCBMuf2sG9GaRivjqG5cuvaFMpVL41VffffftN/pr0Eckq1LHyEI5o6qEy98sLkbNfS0iqdBRqopVJdTdBEXENM1+6ArV1qgSkvkaRKId3xWqrVEuxN23gBDphZZ1yUB4lNLnEMsU1xa+kN9clAqXXyNNoU3MUVwf+kLebKRCwjbTjDLJNb4/ZHUqFZL7otEcxX0af8RldSoR0tcoiyzBvTYOUVKnYuFyCDVqC8m+scxDFA9vYqHRxYQwMgT3vLkhXIpiYSjAaIXgcwtuCOdTkXCZYNjmRYHgsyduCLuNQGhyRa8S0g81daJgeuMLiae1dozQfAaMIXKFoWUwmiT5HB9F5AnDA0ZzNM9iiIi8tcgThgeMZmmepxESOVnkCMNag3bkqZ6JEsSrRy6rha9jPyXECsNqpo7w+wDRL7zXH6ZwhO7ZRKHwyBGpcLI/VGGS7vlSidCbRo9wub8/XGGW7hlhmdBjPOou0P6whRW657zlQhfyqKs+wxcSPquvFNrIy5cbwuUWL1zhCOH7FhChE5OTbl3IwizdOzMIYb8/whMuVujee+pMYZTw3bXOFCYJ3z/sTOE04TuknSlsv0Ma2n5xsMIk5bvc/IgDhSFdPWUp38fnRjr75s9H/MbAbtj/Ud+/wxHmKb9TgRuH7fjh6PcS4euT/+mzIwzgCOn3YnAinj1cjx8uC4Sv99/9sa8eYWRxmvS7TTiRO9yK/y61i3XSVZ5NH4s1emHBKyTf9NOHPdFakJPe8mwFOTAZ8QqpZ9P49GFfNIp1sl6ePh99nS5WfELSuzXxci7rBzaLddJXnm3imvaziLwYifiFVL0m+dNGjaNrGH8+EihPV4xf2bx/P0oDrQaE5lti8sFPG6srK4nEsFDI4sdxIbCvrzjLIrX5y31zYfD72kzu7idHHmw8XE0wXMyOxCMxcDxxRZzCx8UuFinbObG5ef8V3ncoAaP97Zfm35v44P5QG9eIN0XA3aExMfGKA6xHys7mxJNfoO87+6PCEWrNNcmNVa+tnsSnQuDQcExIfOkStpgTmzqZHInwhPgNI7nB4dmxsssv0VFbGFvhE/8odXGCKTWMFa4QvWE8GOb7WKxygUNDjlCQxa4UT8hiNoXtPK4UmnyP8IbQx9LEaTa7Q00hj9hoM9xIzW7ihBmBELcSR1fEQF6zsUu0KeQQa2KgncZnuinU/j7v5JAkg7xms1sHNoRB4q9SYdfsE8RirAiFiCQqgIzgbTZv1nzC38Q7hYCol0Ld79XfkJeoTXjuAQ4Obnuq9PnAgEf4u6jNtImb0HGuIhFCz0Z4oASyZlPzAAcHH7qEqwMDHuJvqhTaRGBHTUZkQth0mlxVA2OxMS9wcLwtHDs+4CHK20wjUhOwpSg/3wJ2ifETIIWsErc9wMFBZyk6++EfAwNu4riizTST+AsE6D9LR+ucGVAKW82mCRwcvFKfaRI7AwMeorLNNJOokUKts4JgKWw2mzZwcLAhPD7gJf4+CxJ2zf5PDQwcnatz3tMoDFhvNm7geFA4AGwz9SRuKYHJgEfnzC5gCmP2eOoGcoWMWFTuFM0oKXtN8Gw5jXPXIFtFs063B5XCAclAGihTxYaxyDmNVOPsPNnEHSD2KYV/wIFdqgk8WKNa5x8OwYGsbSqFL4Ftxo7UM/lcwzuKVOMMS+Be0SDWFEJwm3GEW1Ih9whyjXNIhzHC2KpCuAVuM12qZso/ahV/lmxyDCV0NxuOENFmbGGXpJmO8Cn484CRwlhiXCI8jgIyokSIOw9YshTRwh2JMHB7TV/IXYQSofhcbqzQ1WwCQsxOoRAKjx7Hn62OFsaeC4Xq616oULAIpULRk1J4YeKKQIjaKeRC3knASqFg48cLY2N8IbbNSISCLqMQChqqhjDxlCuEXfdChKKT41VCfkPVEDabjVeIbjNCoaiNqoXcexpawuccIbrNiIS8s6qhQt6eoSNsNBuPEN9mBEI5UCXkELWE9fHULTw+oZFCnlC4EQKFwSFcT+iMp24hbiAVChf54zZGGCDqCZ3x1CXUaTM8oRIIEPoLVVf43CN8grjulQhVJQoT+oiaQnvHaAu12kxAuKhoMmChd9PQFbJm0xbq7BRBIQQIE0YqFELWbJpCvTbjF0o3eqQwkk+bC2OxvoZQs834hLJRDS9kY3jcWJjYaXwyo9lmvELJsK0lbF8vGuQwUc9hTBvYFo6IL5e0hc2WaiCMDTvCCW1gSwjYJTSEjX5jIoyNMuGWPrAphPUYvDCSL8cNhWNMaACsC0egSxAvdEY4I2FsdVhr4nYL1YOaiTBSSZsJY2MmQFuIqVAdYaSQQ3z0xAmDNsOApQeoCtUSRiI1wQOJ4QuLpT38n6shjBSeGhj1hcXSY/AmaCiMRHYVj+2FISw929X6W/WEkcIj3TRqCoulbZ0E6gvZ3vh0RcuoJWQF+kL3D9UWRiIvdnTyqCEsll7qFaipkC3HHfxyRAtnT5r4DIVOy0HmESksntRsMFRCZhzC1SpGmDKrTyIhW4/bw4hihQtTpeKf2v2FVGjvHavgYoUKiye3dPcHb5AII3bTScCqFSQslgjKsxFUQpbI3Z0YIJNqYbFUfLlHkj4n6IQsDtd2EiqkXMh6S+nXRwSrrx2kQhaFGus7snoVC5nuZHHnEV326kEttONF7eFYQrQsucJUkeUu9WSPau25IwxhxF6UtafPh/2vJfKEDq746+O9XerkNSIkoRP5F7XtndGxFfvN2RbVEaZSqVkGK508Wdx6/OejF6QLzxdhCp0oFCIvdmt72w8fDo2Org6PTXRNTGxtPXvy8s+9vRrLW0iZa8f/AXeOgnWKMw8yAAAAAElFTkSuQmCC" alt="user profile photo" className="h-full w-full object-cover"/>
            </span>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg> 
          </button>
          <div className="border-l pl-3 ml-3 space-x-1">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button
            onClick={handleLogout}
            className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Log out</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="p-6 sm:p-10 space-y-6 ">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
            <h2 className="text-gray-600 ml-0.5">Book Store Inventory</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
            <Link to="/dashboard/manage-books" className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Manage Books
            </Link>
            <Link to="/dashboard/add-new-book" className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Book
            </Link>
          </div>
        </div>
       <Outlet/>
       <section className="text-right font-semibold text-gray-500">
              <a href="#" className="text-purple-600 hover:underline">Apali Book Store</a> made by<a href="https://suraj-hapse-porfolio.netlify.app/" className=" hover:underline"> SH</a>
            </section>
      </main>
      
    </div>
    
  </section>
  )
}

export default DashboardLayout