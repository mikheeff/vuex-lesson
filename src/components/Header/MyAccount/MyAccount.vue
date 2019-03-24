<template>
    <div
        v-outer-click="close"
        @click.stop="toggle"
        class="header-action-item is-account">
        <div class="icon-container">
            <img src="../../../assets/23228.png" class="icon">
            <span
                v-if="likeCount"
                class="action-item-counter">{{ likeCount }}</span>
        </div>
        <div class="header-action-item-info">
            <span class="header-action-item-title my-account">MY ACCOUNT</span>
            <span class="header-action-item-subtitle">login / join</span>
        </div>
        <div
            v-if="isOpen"
            class="account-dropdown">
            <div class="dropdown-item">
                <span class="dropdown-icon is-friends"></span>
                <span>My Friends</span>
            </div>
            <div class="dropdown-item">
                <span class="dropdown-icon is-wish"></span>
                <span>My Wishlist</span>
                <span v-if="likeCount">{{ `(${likeCount})` }}</span>
            </div>
            <div class="dropdown-item">
                <span class="dropdown-icon is-compare"></span>
                <span>Compare</span>
            </div>
            <div class="dropdown-item">
                <span class="dropdown-icon is-logout"></span>
                <span>Logout</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {OuterClick} from '../../../common/derictives/outerClick';

    export default Vue.extend({
        directives: {OuterClick},
        data() {
            return {
                isOpen: false
            };
        },
        props: {
            likeCount: {
                required: true,
                type: Number
            }
        },
        methods: {
            toggle() {
                (this.isOpen ? this.close : this.open)();
            },
            close() {
                this.isOpen = false;
            },
            open() {
                this.isOpen = true;
            }
        }
    });

</script>

<style lang="scss" scoped>
    .header-action-item {
        position: relative;
    }

    .account-dropdown {
        top: 117%;
        z-index: 5;
        position: absolute;
        min-width: 260px;
        border-top: 2px solid #F8694A;
        background-color: white;
        padding: 12px 6px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.175);

        .dropdown-item {
            transition: .3s;
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            font-size: 24px;
            justify-content: flex-start;
            text-transform: uppercase;
            font-weight: 500;

            &:hover {
                color: #F8694A;
            }

            .dropdown-icon {
                height: 24px;
                width: 24px;
                margin-right: 12px;

                &.is-friends {
                    background-image: url('../../../assets/profile-orange.svg');
                }

                &.is-wish {
                    background-image: url('../../../assets/heart-like-orange.svg');
                }

                &.is-compare {
                    background-image: url('../../../assets/exchange-arrows-orange.svg');
                }

                &.is-logout {
                    background-image: url('../../../assets/logou-orange.svg');
                }
            }
        }


    }
</style>