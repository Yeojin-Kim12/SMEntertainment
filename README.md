# **[ 직원 관리 서비스 ]**

<aside>
⭐ 직원들을 관리할 수 있는 관리자 서비스를 만들어 보세요.
과제를 진행하시다가 **기술적으로 도움이 필요한 부분**이 생기시면 **멘토링 요청서에 질문으로 남긴 후, 주차별 멘토링 시간 때 멘토님께 질문**해 주시기 바랍니다❗

✔️ 난이도 : ⭐️⭐️

</aside>

### **<과제 수행 및 제출 방법>**

1. 현재 저장소를 로컬에 클론(Clone)합니다.
2. 자신의 본명으로 브랜치를 생성합니다.(구분 가능하도록 본명을 꼭 파스칼케이스로 표시하세요, `git branch KDT0_ParkYoungWoong`)
3. 자신의 본명 브랜치에서 과제를 수행합니다.
4. 과제 수행이 완료되면, 자신의 본명 브랜치를 원격 저장소에 푸시(Push)합니다.(`main` 브랜치에 푸시하지 않도록 꼭 주의하세요, `git push origin KDT0_ParkYoungWoong`)
5. 저장소에서 `main` 브랜치를 대상으로 Pull Request 생성하면, 과제 제출이 완료됩니다!(E.g, `main` <== `KDT0_ParkYoungWoong`)

- `main` 혹은 다른 사람의 브랜치로 절대 병합하지 않도록 주의하세요!
- Pull Request에서 보이는 설명을 다른 사람들이 이해하기 쉽도록 꼼꼼하게 작성하세요!
- Pull Request에서 과제 제출 후 절대 병합(Merge)하지 않도록 주의하세요!
- 과제 수행 및 제출 과정에서 문제가 발생한 경우, 바로 담당 멘토나 강사에서 얘기하세요!

### **<필수 요구사항>**

- 프로필 페이지를 개발하세요.
- 스크롤이 가능한 형태의 리스팅 페이지를 개발하세요.
- 전체 페이지 데스크탑-모바일 반응형 페이지를 개발하세요.
- 사진을 등록, 수정, 삭제가 가능해야 합니다.
- 유저 플로우를 제작하여 리드미에 추가하세요.
- 페이지가 보여지기 전에 로딩 애니메이션이 보이도록 만들어 보세요.
- 직원 검색 기능을 추가해 보세요.
- infinity scroll 기능을 추가해 보세요.
- LocalStorage를 사용하세요
- CSS
    - 애니메이션 구현
    - 상대수치 사용(rem, em)
- JavaScript
    - DOM event 조작

### **<선택 요구사항>**

- 사진을 편집할 수 있는 기능을 추가해 보세요.

### **<화면 예시>**

![Untitled]([https://prod-files-secure.s3.us-west-2.amazonaws.com/3ef8dbd9-414c-4cf5-813d-32ecb943cc67/e565a587-eeb5-4a0a-b952-fd119b44600b/Untitled.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3ef8dbd9-414c-4cf5-813d-32ecb943cc67%2Fe565a587-eeb5-4a0a-b952-fd119b44600b%2FUntitled.png?table=block&id=b003857b-8161-4f95-9c90-848606cfa80c&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&width=1970&userId=eea4528a-9c73-4405-a14c-dfa3e9060a79&cache=v2)https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3ef8dbd9-414c-4cf5-813d-32ecb943cc67%2Fe565a587-eeb5-4a0a-b952-fd119b44600b%2FUntitled.png?table=block&id=b003857b-8161-4f95-9c90-848606cfa80c&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&width=1970&userId=eea4528a-9c73-4405-a14c-dfa3e9060a79&cache=v2)

![Untitled]([https://prod-files-secure.s3.us-west-2.amazonaws.com/3ef8dbd9-414c-4cf5-813d-32ecb943cc67/be516ff7-0eda-422d-91c1-600d7d59062c/Untitled.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3ef8dbd9-414c-4cf5-813d-32ecb943cc67%2Fbe516ff7-0eda-422d-91c1-600d7d59062c%2FUntitled.png?table=block&id=2c3ba5bb-eb39-463a-8443-8f85f66529eb&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&width=1970&userId=eea4528a-9c73-4405-a14c-dfa3e9060a79&cache=v2)https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3ef8dbd9-414c-4cf5-813d-32ecb943cc67%2Fbe516ff7-0eda-422d-91c1-600d7d59062c%2FUntitled.png?table=block&id=2c3ba5bb-eb39-463a-8443-8f85f66529eb&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&width=1970&userId=eea4528a-9c73-4405-a14c-dfa3e9060a79&cache=v2)

### **<유저 플로우>**

![Untitled]([https://prod-files-secure.s3.us-west-2.amazonaws.com/3ef8dbd9-414c-4cf5-813d-32ecb943cc67/54946cb4-0d8f-4cc8-80be-dc681f0ee288/Untitled.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3ef8dbd9-414c-4cf5-813d-32ecb943cc67%2F54946cb4-0d8f-4cc8-80be-dc681f0ee288%2FUntitled.png?table=block&id=c888e752-e654-4cd5-baa7-43ac480d70db&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&width=1970&userId=eea4528a-9c73-4405-a14c-dfa3e9060a79&cache=v2)https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3ef8dbd9-414c-4cf5-813d-32ecb943cc67%2F54946cb4-0d8f-4cc8-80be-dc681f0ee288%2FUntitled.png?table=block&id=c888e752-e654-4cd5-baa7-43ac480d70db&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&width=1970&userId=eea4528a-9c73-4405-a14c-dfa3e9060a79&cache=v2)
