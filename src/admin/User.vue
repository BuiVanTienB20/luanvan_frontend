<template>
    <div class="row">

        <table class="table align-middle mb-0 bg-white " style="margin-left: 50px;">
            <thead class="bg-light">
                <tr>
                    <th>Tên khách hàng</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Liên hệ</th>

                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user._id">
                    <td>
                        <div class="d-flex align-items-center">
                            <img :src="user.imgURL" alt="" style="width: 45px; height: 45px" class="rounded-circle" />
                            <div class="ml-4 ms-3">
                                <p class="fw-bold mb-1">{{ user.name }}</p>
                                
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="text-muted mb-0">{{ user.email }}</p>

                    </td>
                    <td>
                        <p class="fw-normal mb-1">{{ user.address }}</p>

                    </td>

                    <td>{{ user.phoneNumber }}</td>
                    <td>
                        <button type="button" class="btn  btn-danger" @click="deleteUser(user._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-user-cancel">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                                <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M17 21l4 -4" />
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>



    </div>
</template>

<script>

import UserService from '../services/user.service';

export default {
    data() {
        return {

            users: [],
            role: '',


        };
    },
    props: {
        id: { type: String, required: true },
    },
    methods: {
        async deleteUser(id) {

            try {
                await UserService.delete(id);

                this.retrieveUser();

            } catch (error) {
                console.error(error);
            }
        },

        async retrieveUser() {
            try {
                this.users = await UserService.getAll();
                // Assuming the role is fetched along with user data
                this.role = this.users[0].role; // Assuming the role of the first user is representative
            } catch (error) {
                console.error(error);
            }
        },

    },
    created() {

        this.retrieveUser();

    },


}
</script>

<style scoped>
.row {
    margin-top: 110px;
}

.d-flex {
    padding: 10px;
}
</style>