import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../Dashboard/Black & White Minimalist Business Logo.png' 
import anon from '../Dashboard/anon.png'
import { Link } from 'react-router-dom'

function Dashboard() {
    
    const user = {
      name: 'Tom Cook',
      email: 'tom@exa`mple.com',
      imageSrc:anon
    }
    const navigation = [
      { name: 'Dashboard', href: '#', current: true },
      { name: 'Team', href: '#', current: false },
      { name: 'Projects', href: '#', current: false },
      { name: 'Calendar', href: '#', current: false },
      { name: 'Reports', href: '#', current: false },
    ]
    const userNavigation = [
      { name: 'Your Profile', href: '#' },
      { name: 'Settings', href: '#' },
      { name: 'Sign in', href:'#'},
    ]
    
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
      return (
        <>
          {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-gray-100">
            <body class="h-full">
            ```
          */}
          <div className="min-h-full ">
            <Disclosure as="nav" className="bg-white ">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-auto">
                    <div className="flex h-16 items-center justify-between ">
                      <div className="flex items-center">
                      
                          <img
                            className="h-25 w-25 absolute left-0 top-0 m-0"
                            src={logo}
                            alt="Your Company"
                          />
                        
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-blue-400 text-white'
                                    : 'text-blue-800 hover:bg-blue-100 hover:text-blue-800',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button
                            type="button"
                            className="relative rounded-full bg-blue-100 p-1 text-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
    
                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-blue-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src={user.imageSrc} alt="" />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? 'bg-blue-200' : '',
                                          'block px-4 py-2 text-sm text-blue-800'
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-blue-800 p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
    
                  <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-blue-900 text-white' : 'text-blue-300 hover:bg-blue-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                    <div className="border-t border-blue-700 pb-3 pt-4">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={user.imageSrc} alt="" />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">{user.name}</div>
                          <div className="text-sm font-medium leading-none text-blue-400">{user.email}</div>
                        </div>
                        <button
                          type="button"
                          className="relative ml-auto flex-shrink-0 rounded-full bg-blue-800 p-1 text-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-blue-400 hover:bg-blue-700 hover:text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <main>
              <div className="mx-auto">

              <div className="hero-section p-12 text-left bg-blue-300 rounded-xl ">
                <div>

      <div className="max-w-screen-2xl  flex justify-between">
     <div className="flex">
        <div className='flex flex-col w-2/3 justify-end'>

        <h1 className=" hero-title text-5xl mb-7 font-bold text-blue-900 ">Showcase your work online with a portfolio website</h1>
        <p className="hero-subtitle mb-7  text-blue-900 text-xl s">From intuitive design features to built-in marketing tools, discover the complete solution for building a portfolio that stands out online.</p>
        <div className='block text-center'>
   
    <Link to="/login"> 
                  <button className="inline-block px-3 py-4 mx-12 fw-bold btn bg-blue-400 text-xl border border-blue-900 rounded-lg p-3 hover:bg-blue-100 hover:text-blue-900">
                    Get Started
                  </button>
                </Link>

          
        </div>
        </div>
           </div>
           <div className='flex  justify-end'>
            <img className=' w-full rounded-lg' src='https://static.wixstatic.com/media/311dce_794a2a61cb794ea79bddc97f9606181c~mv2.png/v1/fill/w_710,h_958,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/311dce_794a2a61cb794ea79bddc97f9606181c~mv2.png' alt=''/>    
           </div>
                </div>
             </div>
             </div>
         </div>   
            </main>
          </div>
        </>
      )
    }
    export default Dashboard;
  