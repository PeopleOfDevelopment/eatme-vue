<template>
    <Sidebar></Sidebar>
    <div id="main-wrapper">
        <TopNav navType="tabs" :tabList="['고객센터 문의', '자주 묻는 질문']"
            :currentTab="currentTab" :changeTab="changeTab"></TopNav>

        <div class="search">
            <span class="material-symbols-rounded">search</span>
            <input
                class="search_input"
                type="text"
                placeholder="검색어를 입력하세요" />
        </div>
        <div class="qna-list">
            <div class="qna-box1" v-for="posts in paginatedPosts" :key="posts.id">
                <p class="qna-text1">{{ posts.title }}</p>
                <p class="qna-day1">{{ posts.day }}</p>
            </div>
        </div>
        <div class="pagination">
            <span class="material-symbols-rounded" @click="prevPage"
            style="cursor: pointer; font-size: 20px;">
                arrow_back_ios</span>
            <span style="font-size: 20px;">{{ currentPage }} / {{ totalPages }}</span>
            <span class="material-symbols-rounded" @click="nextPage"
            style="cursor: pointer; font-size: 20px;">
                arrow_forward_ios</span>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import TopNav from '../../common/components/TopNav.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const currentTab = ref(0);

const changeTab = (index) => {
  currentTab.value = index;
};

const posts = ref([
    {
        id: 1,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 2,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 3,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 4,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 5,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 6,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 7,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 8,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 9,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 10,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 11,
        title: '게시글1',
        day: '2023-09-23',
    },
    {
        id: 12,
        title: '게시글1',
        day: '2023-09-23',
    },
]);

const itemsPerPage = 8;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(posts.value.length / itemsPerPage));

const paginatedPosts = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return posts.value.slice(startIndex, endIndex);
});

const router = useRouter();

const nextPage = () => {
    if(currentPage.value < totalPages.value) {
        currentPage.value++;
        updateRoute();
    }
};

const prevPage = () => {
    if(currentPage.value > 1) {
        currentPage.value--;
        updateRoute();
    }
};

const updateRoute = () => {
    router.push({ query: { page: currentPage.value } });
}
</script>

<style scoped>
.search {
  border-radius: 50px;
  border: #ebf3e9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
  background-color: #ebf3e9;
  padding: 8px;
  gap: 4px;
  color: var(--ngray600);
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
}

.search_input {
  background-color: #ebf3e9;
  font-family: Pretendard;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  width: 90%;
  outline: none;
}

.qna-list {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 1000px;
    margin-top: 50px;
}
.qna-box1 {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px var(--ngray200);
}

.qna-text1 {
    font-size: 20px;
    margin-left: 50px;
    cursor: pointer;
}

.qna-day1 {
    font-size: 20px;
    margin-right: 50px;
}

.pagination{
    margin-top: 30px;
}
</style>