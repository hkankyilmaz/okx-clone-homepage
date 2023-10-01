import React from 'react'
import Image from 'next/image'
import image from "../../_assets/okx.png"
import qr from "../../_assets/qr.png"



function Footer() {
    return (
        <section className='text-white bg-[#121212] py-[100px] max-xl+:px-[25px] px-[150px] mt-40 footer'>
            <div className='mb-[50px]'>
                <Image alt='faa' width={100} src={image} />
                <p>@2023 OKY.COM</p>
            </div>
            <div className='my-10'>
                <button className='max-md:text-xs max-md:px-8 px-12 py-3 bg-white text-black rounded-3xl border my-5' >Türkçe/USD</button>
            </div>
            <div className='flex justify-between' >

                <div className='grid grid-cols-5 max-sm:gap-5 gap-2 [&>p]:text-4xl w-[85%] max-lg:w-[100%] max-sm:grid-cols-1' >
                    <div>
                        <p  >OKX hakkında</p>
                        <ul>
                            <li>Hakkımızda</li>
                            <li>Kariyer</li>
                            <li>Bize Ulaşın</li>
                            <li>Hizmet Şartları</li>
                            <li>Gizlilik Politikası</li>
                            <li>Açıklamalar</li>
                            <li>Feragatname</li>
                            <li>Hukuki Yaptırım</li>
                            <li>OKX Uygulaması</li>
                        </ul>
                    </div>

                    <div>
                        <p>Ürünler</p>
                        <ul>
                            <li>Kripto satın alın</li>
                            <li>P2P alım-satım</li>
                            <li>Dönüştürme</li>
                            <li>Al-Sat</li>
                            <li>Earn</li>
                            <li>OKC</li>
                            <li>OKX Wallet</li>
                            <li>Web3 Marketi</li>
                            <li>Kripto hesap makinesi</li>
                            <li>Al-Sat Botları</li>
                            <li>Tüm kripto paralar</li>
                            <li>Akademi</li>
                        </ul>

                    </div>

                    <div>
                        <div>
                            <p>Hüzmetlerimiz</p>
                            <ul>
                                <li> İştirak </li>
                                <li>V5 API</li>
                                <li>Geçmiş piyasa verileri</li>
                                <li>Ücret Tablosu</li>
                                <li>Listeleme başvurusu</li>
                                <li>P2P İlanveren başvurusu</li>
                            </ul>
                        </div>
                        <div>
                            <p className='mt-2' >Destek</p>
                            <ul>
                                <li> Destek Merkezi </li>
                                <li>Resmî Hesapları Doğrula</li>
                                <li>Duyurular</li>
                                <li>Ücret Tablosu</li>
                                <li>Listeleme başvurusu</li>
                                <li>OKX Toplulukları</li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <div>
                            <p>Kripto satın alın</p>
                            <ul>
                                <li>USDT satın alın</li>
                                <li>Bitcoin Satın Al</li>
                                <li>Ethereum Satın Al</li>
                                <li>ADA Satın Al</li>
                                <li>Solana Satın Al</li>
                                <li>MATIC Satın Al</li>
                                <li>Litecoin al</li>
                                <li>XRP Satın Al</li>
                            </ul>
                        </div>
                        <div>
                            <p className='mt-2' >Kripto Hesap Makinesi</p>
                            <ul>
                                <li>BTC/TRY</li>
                                <li>ETH/TRY</li>
                                <li>USDT/TRY</li>
                                <li>SOL/TRY</li>
                                <li>XRP/TRY</li>
                            </ul>
                        </div>

                    </div>

                    <div>
                        <p>AL-sat</p>
                        <ul>
                            <li>BTC USDT</li>
                            <li>ETH USDT</li>
                            <li>MATIC USDT</li>
                            <li>LTC USDT</li>
                            <li>SOL USDT</li>
                            <li>XRP USDT</li>
                            <li>Bitcoin fiyatı</li>
                            <li>Ethereum fiyatı</li>
                            <li>Cardano fiyatı</li>
                            <li>Solana fiyatı</li>
                            <li>XRP fiyatı</li>
                        </ul>
                    </div>
                </div>
                <div className='max-w-[200px] flex flex-col justify-center items-center self-start max-lg:hidden'>
                    <p className='!text-lg text-center' >OKX Uygulamasi ile Dilediğiniz Zaman İşlem Yapabilirsiniz</p>
                    <button className='px-12 py-3 bg-white text-black rounded-3xl border my-5' >Kayıt</button>
                    <Image alt='foo' className='mb-3' src={qr} />
                    <p className='!text-sm text-center' >OKX uygulamasını indirmek için QR kodunu okutun</p>
                </div>
            </div>
        </section>
    )
}

export default Footer