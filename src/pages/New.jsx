import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';



const New = () => {
  const {onCreate} = useContext{DiaryStateContext}
  const nav = useNavigate();
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
   
  }
  return (
    <div>
      <Header
        title={'오늘의 일기 쓰기'}
        leftChild={<Button onClick={() => nav(-1)} text={'<'} />}
      />
      <Editor />
    </div>
  );
};

export default New;

/**
nav(-1)이 뒤로 가기 기능을 하는 이유를 브라우저의 동작 원리와 함께 설명해 드릴게요.

브라우저의 방문 기록 (History Stack)
우리가 웹 서핑을 할 때 브라우저는 우리가 방문한 페이지들의 목록을 순서대로 기억하고 있습니다. 이걸 '방문 기록 스택(History Stack)'이라고 부릅니다.

예를 들어, 사용자가 아래 순서로 페이지를 방문했다고 가정해 보겠습니다.

Home 페이지 방문 (/)
일기 쓰기 버튼을 눌러 New 페이지로 이동 (/new)
이때 브라우저의 방문 기록은 다음과 같이 쌓입니다.

plaintext
[ Home 페이지, New 페이지 ]
                  ^
                 (현재 위치)
navigate 함수의 숫자 인자
react-router-dom의 useNavigate 훅이 반환하는 navigate 함수(코드에서는 nav 변수에 할당하셨죠)는 바로 이 브라우저의 방문 기록을 제어하는 역할을 합니다.

navigate 함수에 숫자를 인자로 전달하면, 현재 위치를 기준으로 방문 기록 스택에서 얼마나 이동할지를 정할 수 있습니다.

nav(-1): "방문 기록에서 뒤로 1칸 이동해줘" 라는 의미입니다. 마치 브라우저의 '뒤로 가기' 버튼을 누르는 것과 똑같습니다. 위의 예시에서 New 페이지에 있을 때 nav(-1)을 실행하면 바로 이전에 방문했던 Home 페이지로 돌아가게 됩니다.

nav(1) 또는 nav(+1): 반대로 "방문 기록에서 앞으로 1칸 이동해줘" 라는 의미입니다. 브라우저의 '앞으로 가기' 버튼과 동일한 기능이죠. 만약 New 페이지에서 뒤로 가기를 한 번 실행하여 Home 페이지로 돌아온 상태에서 nav(1)을 실행하면, 다시 New 페이지로 이동할 수 있습니다.

nav(-2): 뒤로 2칸 이동합니다.

nav(2): 앞으로 2칸 이동합니다.

이 기능은 React Router가 브라우저에 내장된 window.history API의 history.go() 메서드를 기반으로 만든 것입니다. 순수 JavaScript에서 window.history.go(-1)이 바로 뒤로 가기 기능이거든요.

결론적으로, nav(-1)은 "뒤로 한 페이지 가기"를 의미하는 react-router-dom의 약속이며, 그 원리는 브라우저가 페이지 방문 기록을 관리하는 방식에 기반하고 있습니다. 그냥 외우는 것이 아니라, 브라우저의 '뒤로 가기/앞으로 가기' 기능과 연결된 원리가 있는 셈이죠!
*/
