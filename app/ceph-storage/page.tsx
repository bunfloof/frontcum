'use client'
import { Card, CardContent } from '@/components/ui/card'
import SupportCard from '../components/SupportCardwithoutDiscord'

export default function CephStorage() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'linear-gradient(to top, #071F2C, rgba(30, 58, 138, 0) 80%), linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%), url(/images/isthistheserverinvietnam.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
        }}
        className="pt-20"
      >
        <div className="container mx-auto">
          <div className="text-3xl sm:text-5xl font-semibold mt-20">
            Managed Ceph Storage
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3">
            <p className="text-lg mb-4">
              The digital world is moving faster than ever before with
              increasing data volumes that organizations find difficult to
              foresee or deal with.
            </p>
            <p className="text-lg mb-4">
              Traditional storage environments are often exhausted trying to
              accommodate for unpredictable data demand. Our managed Ceph
              storage capabilities offer a solution to modern complexity with
              unparalleled flexibility and scalability.
            </p>
            <p className="text-lg mb-6">
              Ceph is an open-source platform that offers endless scalability
              potential, and allows your valuable data to remain protected and
              available, so your organization can adapt to changing storage
              needs while still meeting your requirements.
            </p>
          </div>
          <div className="lg:w-1/2 mt-10 pl-4 lg:mt-0">
            <img
              src="/images/cephmanage.svg"
              alt="Managed CEPH powered by Your Company"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="border-0 bg-0">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  Triple redundancy
                </h3>
                <p className="text-center">
                  We utilize a triple-copy strategy for each data block,
                  creating three separate replicas across the system. This extra
                  redundancy offers significantly better protection for the data
                  than the common dual-replication methods found at many
                  providers.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-0 bg-0">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  NVMe/SSD-Storage
                </h3>
                <p className="text-center">
                  Our Ceph infrastructure is comprised entirely of NVMe
                  solid-state technology to avoid the performance bottleneck of
                  spinning disks, and will always respond rapidly to your
                  applications.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-0 bg-0">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 100 16 8 8 0 000-16"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  Network
                </h3>
                <p className="text-center">
                  Our Ceph storage-clusters are connected using 100 Gbps networks
                  links to benefit from high bandwidth and low latency in
                  storage-intense scenarios.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-0 bg-0">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  Backup
                </h3>
                <p className="text-center">
                  Distributed storage systems, including Ceph, are never a
                  replacement for backups. This is why we have developed backup
                  solutions that can run in addition to your Ceph storage, with
                  options for geographical redundancy too.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <SupportCard />
      <div className="py-8" />
    </>
  )
}
