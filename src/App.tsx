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
    Title,
    Alert,
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import Item from './components/Item'
import { Item as IItem } from './models/Item'
import { itemAPI } from './api/itemsService'

const App: React.FC = () => {
    const { data: items, error, isLoading } = itemAPI.useFetchAllItemsQuery()

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
                                    {isLoading && (
                                        <Title>Товары загружаются</Title>
                                    )}
                                    {error && (
                                        <Alert
                                            actions={[
                                                {
                                                    title: 'Лишить права',
                                                    mode: 'destructive',
                                                    action: () => {},
                                                },
                                            ]}
                                            onClose={() => {}}
                                        >
                                            Ошибка
                                        </Alert>
                                    )}
                                    {items &&
                                        items.map((item: IItem) => {
                                            return <Item item={item} />
                                        })}
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
