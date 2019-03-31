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
    import {IGood} from '../../../common/interfaces/IGood';
    import {EVENT_BUS} from '../../../common/services/ShopService';

    interface IAccountData {
        isOpen: boolean;
        goods: IGood[];
    }

    export default Vue.extend({
        mounted() {
            EVENT_BUS.$on('like', this.toggleLike)
        },
        directives: {OuterClick},
        data(): IAccountData {
            return {
                isOpen: false,
                goods: []
            };
        },
        computed: {
          likeCount(): number {
              return this.goods.length;
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
            },
            toggleLike(good: IGood) {
                if (this.goods.indexOf(good) > -1) {
                    this.goods = this.goods.filter((g: IGood) => g.id !== good.id);
                    EVENT_BUS.$emit('likeRemove', good);
                } else  {
                    this.goods.push(good);
                }
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