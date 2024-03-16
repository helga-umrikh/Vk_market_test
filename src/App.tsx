import React from 'react'
import {
    SplitLayout,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SplitCol,
    Div,
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
    return (
        <div className="App">
            <View activePanel="header">
                <Panel id="header">
                    <PanelHeader>Корзина</PanelHeader>
                    <Div>
                        <SplitLayout>
                            <SplitCol
                                width={3}
                                style={{ paddingRight: '16px' }}
                            >
                                <Group
                                    header={
                                        <Header mode="secondary">
                                            Содержимое корзины:
                                        </Header>
                                    }
                                    padding={'m'}
                                >
                                    
                                </Group>
                            </SplitCol>
                            <SplitCol
                                width={1}
                                style={{ paddingRight: '16px' }}
                            >
                                <Group
                                    header={
                                        <Header mode="secondary">
                                            Оформление заказа:
                                        </Header>
                                    }
                                >
                                    <Header>Итого сумма 5999&nbsp;₽</Header>
                                </Group>
                            </SplitCol>
                        </SplitLayout>
                    </Div>
                </Panel>
            </View>
        </div>
    )
}

export default App
