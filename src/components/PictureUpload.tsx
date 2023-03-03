import { Fragment,useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import {encode} from 'base64-arraybuffer';
import {tx} from '../utils/signed_transaction';

export default function PictureUpload(props: {accountName: string, pictures: any, setPictures: any}) {

    let [isOpen,setIsOpen] = useState(false);
    let [fileSrc, setFileSrc] = useState<string | ArrayBuffer | null>(null);
    let [canUpload, setCanUpload] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    function handleFile(e: any) {
        const file = e.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setFileSrc(reader.result);
            setCanUpload(true);
        }
        reader.readAsDataURL(file);
    }

    async function handleUpload(e: any) {
        var nonce = new Uint8Array(32);
        self.crypto.getRandomValues(nonce);

        let pictureId = encode(nonce);
        await tx(`(accounts.create-picture \"${props.accountName}\" \"${pictureId}\" \"${fileSrc}\")`, false)
            .then((_) => {
                const picture = { id: pictureId, src: fileSrc };
                props.setPictures([picture, ...props.pictures]);
            });

    }

    return (
        <>
            <div
             className="">
                <button type="button" onClick={openModal}
                 className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-hite focus-visible:ring-opacity-75">
                    Add Pictures
                </button>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25"/>
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95">
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Dialog Title
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <input type="file" onChange={handleFile}/>
                                            <p>{fileSrc?.toString()}</p>
                                            <img src={fileSrc?.toString()}/>
                                            {canUpload && <div>
                                                <button
                                                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={async (e) => handleUpload(e)}
                                                >Upload</button>
                                            </div>}
                                        </div>

                                        <div className="mt-4">
                                            <button
                                              type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    )
}
