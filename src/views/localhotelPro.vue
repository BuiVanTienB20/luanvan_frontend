<template>
    <div class="hotel">
        <div class="ca">
            <div class="bt">
                <svg width="26" height="26" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2" data-id="IcSystemMapLocationFill12">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6 12C6 12 10.5 8.5 10.5 5.5C10.5 2.73858 8.76142 0.5 6 0.5C3.23858 0.5 1.5 2.73858 1.5 5.5C1.5 8.5 6 12 6 12ZM6 7C7.10457 7 8 6.10457 8 5C8 3.89543 7.10457 3 6 3C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7Z"
                        fill="#FFFFFF"></path>
                </svg>
                <Dropdown v-model="selectedProvince" :options="provinces" filter optionLabel="name"
                    placeholder="Chọn một tỉnh thành" class="w-full md:w-14rem">
                    <template slot="value" slot-scope="slotProps">
                        <div v-if="slotProps.value" class="flex align-items-center">
                            <img :alt="slotProps.value.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.value.name }}</div>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template slot="option" slot-scope="slotProps">
                        <div class="flex align-items-center">
                            <img :alt="slotProps.option.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Dropdown>
            </div>
            <div class="bt">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2" data-id="IcSystemCalendar">
                    <path
                        d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z"
                        stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay"
                    style="width: 140px;margin-right: 10px" />
                <Dropdown v-model="selectedNight" :options="nights" optionLabel="label" placeholder=""
                    style="margin-right: 10px;" class="w-full md:w-14rem">
                    <template slot="value" slot-scope="slotProps">
                        {{ slotProps.value ? slotProps.value.label : slotProps.placeholder }}
                    </template>
                </Dropdown>
                <Calendar v-model="returnDate" showIcon iconDisplay="input" inputId="returnDate" :readonly="true" />

            </div>
            <div class="bt">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2" data-id="IcHotelRoomGuest">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.99958 15C13 15 13 21 13 21H3C3 21 2.99916 15 7.99958 15Z" stroke="#FFFFFF"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 13C9.65685 13 11 11.6569 11 10C11 8.34315 9.65685 7 8 7C6.34315 7 5 8.34315 5 10C5 11.6569 6.34315 13 8 13Z"
                        stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M9 4V3H20V21M20 21H21M20 21H16M13 7H17M17 12H15M17 12V10.5M17 12V13" stroke="#FFFFFF"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <Button :label="`${value1} Người lớn, ${value2} Trẻ em, ${value3} Phòng`" @click="showDialog"
                    severity="secondary" style="border-radius: 10px" />

                <Dialog v-model:visible="visible" modal header="" :style="{ width: '25rem', borderRadius: '10px' }"
                    :showHeader="false">

                    <div class="flex align-items-center gap-3  mt-3 mb-3 ">
                        <b class="ngl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-user-share">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                                <path d="M16 22l5 -5" />
                                <path d="M21 21.5v-4.5h-4.5" />
                            </svg> Người lớn:</b>
                        <InputNumber v-model="value1" :inputId="'horizontal-buttons1'" showButtons
                            :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }" :min="1" />
                    </div>

                    <div class="flex align-items-center gap-3  mb-3 ">
                        <b><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-horse-toy">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
                                <path
                                    d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
                                <path d="M5 18.5l2 -9.5" />
                                <path d="M8 20l2 -5h4l2 5" />
                            </svg>Trẻ em:</b>
                        <InputNumber v-model="value2" :inputId="'horizontal-buttons2'" showButtons
                            :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }" :min="0" />
                    </div>

                    <div class="flex align-items-center gap-3  mb-3 ">
                        <b><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-door">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 12v.01" />
                                <path d="M3 21h18" />
                                <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
                            </svg>Phòng:</b>
                        <InputNumber v-model="value3" :inputId="'horizontal-buttons3'" showButtons
                            :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }" :min="1"
                            :max="value1" />
                    </div>

                    <div class="flex justify-content-end gap-2" :style="{ marginLeft: '250px' }">
                        <Button type="button" label="Xong" severity="secondary" @click="closeDialog"></Button>
                    </div>
                </Dialog>
            </div>
            <div class="bt">
                <button class="btn btn-warning text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-zoom">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg></button>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="col-sm-12">
                        <b>Bộ lọc phôt biến cho</b>
                    </div>

                </div>
                <div class="col-sm-9">
                    <div class="col-sm-12" style="display: flex;">
                        <div class="col-sm-6">
                            <Carousel :value="products" :circular="false" :showIndicators="false" :numVisible="3"
                                :numScroll="3" :responsiveOptions="responsiveOptions">
                                <template #item="slotProps">
                                    <div class="border-1 surface-border border-round m-2  p-3">
                                        <div class="mb-3 font-medium" style="white-space: nowrap;">{{
                                            slotProps.data.name }}</div>

                                    </div>
                                </template>
                            </Carousel>

                        </div>
                        <div class="col-sm-3" style="margin-top: 20px">
                            <Dropdown v-model="selectedCity" :options="sx" option-label="name" placeholder="Xếp theo"
                                checkmark :highlight-on-select="false" class="w-full md:w-14rem" />


                        </div>
                        <div class="col-sm-3">
                            hello


                        </div>

                    </div>




                    <div class="giam col-sm-12">
                        Giảm trực tiếp 20% so với ngày thường. Trượt xuống để chọn khách sạn!

                    </div>

                    <div class="lc col-sm-12">
                        Tìm thấy 51 cơ sở lưu trú tại Bà Rịa - Vũng Tàu
                    </div>

                    <div class="ks col-sm-12">
                        <div class="ht">
                            <img src="../assets/img/ads1.webp" alt="">

                        </div>
                        <div class="kt">
                            <p style="color:rgb(3, 18, 26); font-weight: 700;font-size: 16px;">
                                Premier Pearl Hotel Vung Tau
                            </p>

                            <p style="color:rgb(2, 100, 200); font-weight: 500;font-size: 12px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-window">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z" />
                                    <path d="M5 13l14 0" />
                                    <path d="M12 3l0 18" />
                                </svg> Khu nghỉ dưỡng


                                <span style="color: yellow; font-size: 26px;">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <!-- Five yellow star symbols -->


                            </p>
                            <p style="color:  rgb(3, 18, 26); font-weight: 500; font-size: 14px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg> Hồ Tràm, Xã Phước Thuận, Thành phố Vũng Tàu, Xuyên Mộc, Bà Rịa - Vũng Tàu, Việt
                                Nam
                            </p>
                            <p style="color:  rgb(3, 18, 26); font-weight: 500; font-size: 10px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: rgb(2, 100, 200); font-weight: 400;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-brand-trello">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M7 7h3v10h-3z" />
                                    <path d="M14 7h3v6h-3z" />
                                </svg>Máy lạnh, Nhà hàng, Hồ bơi, Lễ tân 24h, Chỗ đậu xe, Thang máy</p>
                            <p
                                style="border-radius: 20px; background-color: rgb(255, 220, 0);color: rgb(0, 0, 0); font-weight: 500;width: 309px;font-size: 12px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    style="color: aliceblue; font-weight: 500;" stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-discount">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 15l6 -6" />
                                    <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
                                    <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                </svg> Đặt sớm mã giảm 500k + công dồn tới 80k
                            </p>
                            <p style="color:  rgb(177, 84, 0); font-weight: 500;font-size: 14px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style=" font-weight: 700;"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pig-money">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 11v.01" />
                                    <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377" />
                                    <path
                                        d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z" />
                                </svg> 1000</p>

                        </div>
                        <div class="bt">
                            <div class="thpd"
                                style=" background-color: rgb(186, 240, 117); border-radius: 20px; color: rgb(0, 135, 89); width: 100px; text-align: center;justify-content: center;">
                                <img style="width: 20px;height: 20px;" class="mr-2"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/21/1637537023389-169535f715e7d4b32d217e48a201dba4.png"
                                    alt=""> Sale lễ

                            </div>
                            <div class="thpd" style="width: 121px; color: rgb(255, 94, 31);
    padding-top: 54px;">

                                <b> 2.916.000 VND</b>



                            </div>
                            <div class="thpd">

                                <div class="tt">
                                    <button class="chooserom btn text-white"> Chọn phòng

                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="ks col-sm-12">
                        <div class="ht">
                            <img src="../assets/img/ads1.webp" alt="">

                        </div>
                        <div class="kt">
                            <p style="color:rgb(3, 18, 26); font-weight: 700;font-size: 16px;">
                                Premier Pearl Hotel Vung Tau
                            </p>

                            <p style="color:rgb(2, 100, 200); font-weight: 500;font-size: 12px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-window">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z" />
                                    <path d="M5 13l14 0" />
                                    <path d="M12 3l0 18" />
                                </svg> Khu nghỉ dưỡng


                                <span style="color: yellow; font-size: 26px;">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <!-- Five yellow star symbols -->


                            </p>
                            <p style="color:  rgb(3, 18, 26); font-weight: 500; font-size: 14px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg> Hồ Tràm, Xã Phước Thuận, Thành phố Vũng Tàu, Xuyên Mộc, Bà Rịa - Vũng Tàu, Việt
                                Nam
                            </p>
                            <p style="color:  rgb(3, 18, 26); font-weight: 500; font-size: 10px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: rgb(2, 100, 200); font-weight: 400;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-brand-trello">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M7 7h3v10h-3z" />
                                    <path d="M14 7h3v6h-3z" />
                                </svg>Máy lạnh, Nhà hàng, Hồ bơi, Lễ tân 24h, Chỗ đậu xe, Thang máy</p>
                            <p
                                style="border-radius: 20px; background-color: rgb(255, 220, 0);color: rgb(0, 0, 0); font-weight: 500;width: 309px;font-size: 12px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    style="color: aliceblue; font-weight: 500;" stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-discount">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 15l6 -6" />
                                    <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
                                    <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                </svg> Đặt sớm mã giảm 500k + công dồn tới 80k
                            </p>
                            <p style="color:  rgb(177, 84, 0); font-weight: 500;font-size: 14px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style=" font-weight: 700;"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pig-money">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 11v.01" />
                                    <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377" />
                                    <path
                                        d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z" />
                                </svg> 1000</p>

                        </div>
                        <div class="bt">
                            <div class="thpd"
                                style=" background-color: rgb(186, 240, 117); border-radius: 20px; color: rgb(0, 135, 89); width: 100px; text-align: center;justify-content: center;">
                                <img style="width: 20px;height: 20px;" class="mr-2"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/21/1637537023389-169535f715e7d4b32d217e48a201dba4.png"
                                    alt=""> Sale lễ

                            </div>
                            <div class="thpd" style="width: 121px; color: rgb(255, 94, 31);
    padding-top: 54px;">

                                <b> 2.916.000 VND</b>



                            </div>
                            <div class="thpd">

                                <div class="tt">
                                    <button class="chooserom btn text-white"> Chọn phòng

                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>


                    <div class="ks col-sm-12">
                        <div class="ht">
                            <img src="../assets/img/ads1.webp" alt="">

                        </div>
                        <div class="kt">
                            <p style="color:rgb(3, 18, 26); font-weight: 700;font-size: 16px;">
                                Premier Pearl Hotel Vung Tau
                            </p>

                            <p style="color:rgb(2, 100, 200); font-weight: 500;font-size: 12px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-window">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z" />
                                    <path d="M5 13l14 0" />
                                    <path d="M12 3l0 18" />
                                </svg> Khu nghỉ dưỡng


                                <span style="color: yellow; font-size: 26px;">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <!-- Five yellow star symbols -->


                            </p>
                            <p style="color:  rgb(3, 18, 26); font-weight: 500; font-size: 14px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg> Hồ Tràm, Xã Phước Thuận, Thành phố Vũng Tàu, Xuyên Mộc, Bà Rịa - Vũng Tàu, Việt
                                Nam
                            </p>
                            <p style="color:  rgb(3, 18, 26); font-weight: 500; font-size: 10px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: rgb(2, 100, 200); font-weight: 400;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-brand-trello">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M7 7h3v10h-3z" />
                                    <path d="M14 7h3v6h-3z" />
                                </svg>Máy lạnh, Nhà hàng, Hồ bơi, Lễ tân 24h, Chỗ đậu xe, Thang máy</p>
                            <p
                                style="border-radius: 20px; background-color: rgb(255, 220, 0);color: rgb(0, 0, 0); font-weight: 500;width: 309px;font-size: 12px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    style="color: aliceblue; font-weight: 500;" stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-discount">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 15l6 -6" />
                                    <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
                                    <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                </svg> Đặt sớm mã giảm 500k + công dồn tới 80k
                            </p>
                            <p style="color:  rgb(177, 84, 0); font-weight: 500;font-size: 14px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style=" font-weight: 700;"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pig-money">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 11v.01" />
                                    <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377" />
                                    <path
                                        d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z" />
                                </svg> 1000</p>

                        </div>
                        <div class="bt">
                            <div class="thpd"
                                style=" background-color: rgb(186, 240, 117); border-radius: 20px; color: rgb(0, 135, 89); width: 100px; text-align: center;justify-content: center;">
                                <img style="width: 20px;height: 20px;" class="mr-2"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/21/1637537023389-169535f715e7d4b32d217e48a201dba4.png"
                                    alt=""> Sale lễ

                            </div>
                            <div class="thpd" style="width: 121px; color: rgb(255, 94, 31);
    padding-top: 54px;">

                                <b> 2.916.000 VND</b>



                            </div>
                            <div class="thpd">

                                <div class="tt">
                                    <button class="chooserom btn text-white"> Chọn phòng

                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>





            </div>

        </div>

    </div>


</template>

<script>
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Carousel from 'primevue/carousel';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Tooltip from 'primevue/tooltip';
import View from '../components/view.vue';
import RoomService from '../services/phong.service';
export default {
    components: {
        Dropdown,
        Calendar,
        Dialog,
        Button,
        InputNumber,
        View,
        RoomService,
        Carousel,

    },
    directives: {
        'tooltip': Tooltip
    },
    data() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return {
            rooms: [],
            hotelIdInput: '',
            selectedNight: { label: '2 đêm', value: 2 },

            nights: [
                { label: '1 đêm', value: 1 },
                { label: '2 đêm', value: 2 },
                { label: '3 đêm', value: 3 },
                { label: '4 đêm', value: 4 },
                { label: '5 đêm', value: 5 },
                { label: '6 đêm', value: 6 },
                { label: '7 đêm', value: 7 },
                { label: '8 đêm', value: 8 },
                { label: '9 đêm', value: 9 },
                { label: '10 đêm', value: 10 },
                { label: '11 đêm', value: 11 },
                { label: '12 đêm', value: 12 },
                { label: '13 đêm', value: 13 },
                { label: '14 đêm', value: 14 },
                { label: '15 đêm', value: 15 },
                { label: '16 đêm', value: 16 },
                { label: '17 đêm', value: 17 },
                { label: '18 đêm', value: 18 },
                { label: '19 đêm', value: 19 },
                { label: '20 đêm', value: 20 }
            ],
            selectedProvince: null,
            provinces: [
                { name: 'Hà Nội', code: 'HN' },
                { name: 'Hồ Chí Minh', code: 'HCM' },
                { name: 'Đà Nẵng', code: 'DN' },
                { name: 'Hải Phòng', code: 'HP' },
                { name: 'Cần Thơ', code: 'CT' },
                { name: 'Bình Dương', code: 'BD' },
                { name: 'Đồng Nai', code: 'DNai' },
                { name: 'Khánh Hòa', code: 'KH' },
                { name: 'Quảng Nam', code: 'QNam' },
                { name: 'Hải Dương', code: 'HD' }

            ].map(city => {
                return {
                    ...city,
                    nameWithCountry: `${city.name} (Việt Nam)`
                };
            }),
            booking: {
                city: '',
                checkinDate: '',
                checkoutDate: '',
                nights: 1,
                guests: 1,
            },
            icondisplay: tomorrow,
            // cus
            visible: false,
            value1: 1,
            value2: 0,
            value3: 1,
            plainOptions: ['Miễn phí hủy phòng', 'Thanh toán tại khách sạn', 'Miễn phí bữa ăn sáng'],
            state: {
                indeterminate: true,
                checkAll: false,
                checkedList: ['Miễn phí hủy phòng', 'Miễn phí bữa ăn sáng']
            },
            products: [
                { name: 'All ', },
                { name: 'căn hộ ', },
                { name: 'biệt thự ', },
                { name: 'gia đình', },
                { name: 'ưu đãi ', },


            ],
            selectedCity: null,
            sx: [
                { name: 'Giá cao nhất', code: 'gc' },
                { name: 'Giá thấp nhất', code: 'gt' },
                { name: 'Độ phổ biến', code: 'dpb' },
                { name: 'Điểm đánh giá', code: 'ddg' },

            ]
        };
    },
    props: {
        id: { type: String, required: true },
    },
    computed: {

        returnDate() {
            const returnDate = new Date(this.icondisplay);
            returnDate.setDate(returnDate.getDate() + this.selectedNight.value);
            return returnDate;

        }


    },

    methods: {

        submitForm() {
            // Gửi dữ liệu đặt phòng lên máy chủ
            console.log('Đã gửi dữ liệu đặt phòng:', this.booking);
            // Đoạn mã gửi dữ liệu lên máy chủ sẽ được thêm vào ở đây
            // Ví dụ: sử dụng axios hoặc fetch API để gửi dữ liệu
        },
        showDialog() {
            if (this.value1 === 0 || this.value3 === 0 || this.value3 > this.value1) {

            } else {
                this.visible = true;
            }
        },
        closeDialog() {
            this.visible = false;
        },
        onCheckAllChange(e) {
            this.state.checkedList = e.target.checked ? this.plainOptions : [];
            this.state.indeterminate = false;
        },
        updateChecked() {
            this.state.indeterminate = this.state.checkedList.length > 0 && this.state.checkedList.length < this.plainOptions.length;
            this.state.checkAll = this.state.checkedList.length === this.plainOptions.length;
        },
    },
    watch: {
        'state.checkedList': 'updateChecked'
    },
};
</script>

<style scoped>
.hotel {
    margin-top: 121px;
    margin-bottom: 100px;




}

.nen {
    border-radius: 10px;
    width: 938px;
    /* Chiều rộng cố định của ảnh */
    height: 213px;
    /* Chiều cao cố định của ảnh */
    display: block;
    /* Hiển thị là block element để sử dụng margin: auto */
    margin-left: 100px;
    /* Đẩy ảnh về phía bên trái */
    margin-right: auto;
    /* Đẩy ảnh về phía bên phải */
    margin-bottom: 40px;
}

.giam {

    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: #007bff;
    color: #ffffff;
    display: flex;
    align-items: center;
    height: 40px;

}



.lc {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    margin-bottom: 20px;

}

.ks {

    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

.ks:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.5);
    /* Màu viền khi rê chuột vào */
}

.ht {
    padding: 10px;

}

.ht>img {
    width: 275px;
    height: 255px;
    border-radius: 10px;

}

.kt {
    padding-top: 4px;
    margin-right: 62px;
}


.bt {
    padding: 10px;

}

.thpd {
    display: flex;
    padding-top: 5px;
    width: 150px;
}

.chooserom {
    background-color: rgb(255, 94, 31);
    font-weight: 700;
}

.chooserom:hover {
    background-color: rgba(255, 94, 31, 0.8);
}

.tt {
    padding: 100px 5px 5px 5px;

}

.ca {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: #4584c8;
    height: 80px;
    padding: 10px;
    margin-bottom: 20px;


}

.product-item {
    max-width: 200px;
    /* Adjust as needed */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>