<template>
    <header class="header">
        <div class="container">
            <nav class="header__nav">
                <ul class="header__link-list">
                    <li class="header__link-item">
                        <router-link
                            to='/'
                            class="header__link"
                        >
                            Главная
                        </router-link>
                    </li>
                    <li class="header__link-item">
                        <router-link
                            to='/about'
                            class="header__link"
                        >
                            Обо мне
                        </router-link>
                    </li>
                    <li class="header__link-item">
                        <router-link
                            to='/portfolio'
                            class="header__link"
                        >
                            Портфолио
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style lang="scss" src="./style.scss" />
