<template>
    <div class="row">
        <div class="col-sm-12">
            <table class="table align-middle mb-0 bg-white">

                <thead class="bg-light">
                    <tr class="table-info">
                        <th scope="row"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                            </svg>Khách hàng</th>

                    </tr>

                </thead>


                <tbody>
                    <tr>
                        <td>
                            <div class="d-flex mt-2 mb-4 align-items-center" v-for="user in users" :key="user._id"
                                style="background-color: #e7f5f5;;">
                                <img :src="user.imgURL" alt="" style="width: 45px; height: 45px; "
                                    class="rounded-circle" />
                                <div class="ms-3">
                                    <p class="fw-bold mb-1">{{ user.name }}</p>
                                    <p class="text-muted mb-0">{{ user.email }}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-center" v-for="user in users" :key="user._id">


                            </div>
                        </td>


                    </tr>


                </tbody>
            </table>

        </div>



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