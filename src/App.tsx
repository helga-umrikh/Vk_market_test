import React, { useEffect, useState } from 'react'
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
import '@vkontakte/vkui/dist/vkui.css'
import Item from './components/Item'
import { getItems } from './api/getItems'
import { Item as IItem } from './models/Item'

const App: React.FC = () => {
    const [items, setItems] = useState<IItem[] | undefined>()

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getItems()
                setItems(data)
            } catch (error) {
                console.error('Error fetching items:', error)
            }
        }

        fetchItems()
    }, [])

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
