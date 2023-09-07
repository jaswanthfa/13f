import Image from 'next/image'
import { Inter } from 'next/font/google'
import App from './_app'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
<div  class="bg-gray-100">
      <div class="flex flex-col h-screen md:min-w-max">
      <div class="flex-1 p-3 sm:p-8 md:mt-14">
                        <div class="flex flex-col w-full sm:max-w-xl h-full mx-auto">
                              <h1 class="mt-12 sm:mt-32 sm:text-5xl mb-4">Search 13F Filings</h1>
                          <div class="relative mb-12">
                                <form action="/search" accept-charset="UTF-8" method="get">
                              <input className="box" name="q" data-url="/data/Linkutocomplete" class="text-lg sm:text-2xl w-full rounded shadow" placeholder="Search by manager or investment…"  type="search"/>
                              </form> <div class="autocomplete-results"></div>
                          </div>
                                  <div class="flex-1 mb-12">
                                          <details>
                                              <summary class="text-xs mb-4 cursor-pointer">
                                                  <h2 class="inline align-middle text-xl font-medium">
                                                Most-Searched Managers
                                                </h2>
                                              </summary>
                                          
                                              <div class="mb-6" id="Manager">
                                                      <ol class="list-disc ml-6">
                                                      <li>
                                                      <Link className='Link' href="/manager/0001649339-scion-asset-management-llc">Scion Asset Management, LLC</Link>
                                                      </li>
                                                      <li>
                                                      <Link className='Link' href="/manager/0001067983-berkshire-hathaway-inc">Berkshire Hathaway Inc</Link>
                                                      </li>
                                                      <li>
                                                      <Link className='Link' href="/manager/0001536411-duquesne-family-office-llc">Duquesne Family Office LLC</Link>
                                                      </li>
                                                      <li>
                                                      <Link className='Link' href="/manager/0001037389-renaissance-technologies-llc">Renaissance Technologies LLC</Link>
                                                      </li>
                                                      <li>
                                                      <Link className='Link' href="/manager/0001350694-bridgewater-associates-lp">Bridgewater Associates, LP</Link>
                                                      </li>
                                                      <li>
                                                      <Link className='Link' href="/manager/0001061768-baupost-group-llc-ma">Baupost Group LLC/Ma</Link>
                                                      </li>
                                                      <li>
                                                      <Link className='Link' href="/manager/0001791786-elliott-investment-management-l-p">Elliott Investment Management L.P.</Link>
                                                      </li>
                                                      <li>
                                                      <Link className='Link' href="/manager/0001336528-pershing-square-capital-management-l-p">Pershing Square Capital Management, L.P.</Link>
                                                      </li>
                                                      </ol>
                                                </div>
                                          </details>
                                      <details>
                                                        <summary class="text-xs mb-4 cursor-pointer">
                                                        <h2 class="inline align-middle text-xl font-medium">
                                                          About + More Examples
                                                        </h2>
                                                          </summary>
                                                <div class="text-base">
                                                          <p class="mb-4">
                                                        The SEC requires institutional investment managers to file quarterly Form 13F reports that list equity assets under management. You can read more about the rules for 13F filings on
                                                        <Link className='Link' target="_blank" href="https://www.sec.gov/divisions/investment/13ffaq.htm">the SEC’s website</Link>
                                                        </p>
                                                        <p class="mb-4">
                                                        Filings are publicly available via
                                                        <Link className='Link' target="_blank" href="https://www.sec.gov/edgar/searchedgar/companysearch.html">EDGAR</Link>,
                                                          but the formatting is not ideal, so I
                                                        (<Link className='Link' target="_blank" href="https://toddwschneider.com/">Todd</Link>)
                                                          built this site as a nicer way to view them
                                                        </p>
                                                        <p class="mb-4">
                                                        The site provides additional functionality to compare 13Fs across periods, view a manager’s holding history for a specific investment, and list all managers who reported holding a particular company within a given quarter
                                                        </p>
                                                        <h3 class="font-medium mt-8 mb-4 text-xl">
                                                        Examples by manager
                                                        </h3>
                                                        <ul class="list-disc ml-6">
                                                        <li>
                                                        <Link className='Link' href="/manager/0001067983-berkshire-hathaway-inc">All Berkshire Hathaway 13F filings</Link>
                                                        </li>
                                                        <li>
                                                        <Link className='Link' href="/13f/000095012323008074-berkshire-hathaway-inc-q2-2023">Berkshire Hathaway Q2 2023 13F</Link>
                                                        </li>
                                                        <li>
                                                        <Link className='Link' href="/13f/000095012323008074/compare/000095012323005270">Comparison of Berkshire Hathaway’s Q1 and Q2 2023 holdings</Link>
                                                        </li>
                                                        <li>
                                                        <Link className='Link' href="/manager/0001067983/cusip/037833100">History of Berkshire Hathaway’s Apple holdings</Link>
                                                        </li>
                                                        </ul>
                                                        <h3 class="font-medium mt-8 mb-4 text-xl">
                                                        Examples by investment
                                                        </h3>
                                                        <ul class="list-disc ml-6">
                                                        <li>
                                                        <Link className='Link' href="/cusip/037833100/2023/2">Apple holders as of Q2 2023</Link>
                                                        </li>
                                                        <li>
                                                        <Link className='Link' href="/cusip/037833100/2023/2/compare/2023/1">Comparison of Apple ownership from Q1 to Q2 2023</Link>
                                                        </li>
                                                        <li>
                                                        <Link className='Link' href="/cusip/037833100">Number of managers reporting Apple ownership by quarter</Link>
                                                        </li>
                                                        </ul>
                                                        <h3 class="font-medium mt-8 mb-4 text-xl">
                                                        Caveat emptor!
                                                        </h3>
                                                        <p class="mb-4">
                                                        There are many caveats about 13F data, but perhaps the most important is the notice that the SEC puts at the top of every filing on its site, which basically says that nobody has done any checking to see if the data is accurate:
                                                        </p>
                                                        <blockquote class="mb-4 pl-4 border-l-4 border-gray-300 text-gray-700 leading-5">
                                                        The Securities and Exchange Commission has not necessarily reviewed the information in this filing and has not determined if it is accurate and complete. The reader should not assume that the information is accurate and complete
                                                        </blockquote>
                                                        <p class="mb-4">
                                                        The code for this site is <Link className='Link' target="_blank" href="https://github.com/toddwschneider/sec-13f-filings">available on GitHub</Link>, along with more information about how it works and its limitations. You might find the code helpful purely for populating a database of 13F filings, even if you don’t care as much about the front end
                                                        </p>
                                                        <h3 class="font-medium mt-8 mb-4 text-xl">
                                                        Contact
                                                        </h3>
                                                        <p class="mb-4">
                                                        You can email me at <Link className='Link' href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dfabb0bbbb9fabb0bbbba8acbcb7b1bab6bbbaadf1bcb0b2">[email&#160;protected]</Link>, or open an issue on GitHub
                                                        </p>
                                                </div>
                                          </details>
                                  </div>
                        </div>
    </div>
   
              <div class="bg-gray-700 text-gray-100 text-center py-3">
              <span class="pr-2 inline">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers">All Managers</Link>
              </span>
              <ul class="inline">
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/Link">A</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/b">B</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/c">C</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/d">D</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/e">E</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/f">F</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/g">G</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/h">H</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/i">I</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/j">J</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/k">K</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/l">L</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/m">M</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/n">N</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/o">O</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/p">P</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/q">Q</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/r">R</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/s">S</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/t">T</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/u">U</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/v">V</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/w">W</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/x">X</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/y">Y</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/z">Z</Link>
              </li>
              <li class="hidden sm:inline pr-2">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/managers/0">0</Link>
              </li>
              </ul>
              <span class="inline pl-8">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="/newest">Latest Filings</Link>
              </span>
              <span class="inline pl-8">
              <Link class="text-gray-100 visited:text-gray-100 hover:text-gray-300" href="https://13f.info/privacy">Privacy Policy</Link>
              </span>
              </div>
    </div>
</div>
  )}