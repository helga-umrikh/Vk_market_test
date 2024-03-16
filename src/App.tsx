import React, { useEffect } from 'react'
import {
    SplitLayout,
    Panel,
    PanelHeader,
    Header,
    Group,
    SplitCol,
    Div,
    ScreenSpinner,
    Alert,
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import Item from './components/Item'
import { Item as IItem } from './interfaces/Item'
import { useDispatch, useSelector } from 'react-redux'
import {
    addItems,
    setError,
    setLoading,
} from './redux/slices/itemsSlice'
import { RootState } from './redux/store'

const App: React.FC = () => {
    const items = useSelector((state: RootState) => state.items.data)
    const isLoading = useSelector((state: RootState) => state.items.isLoading)
    const isError = useSelector((state: RootState) => state.items.isError)
    const dispatch = useDispatch()

    const getItems = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        return await response.json()
    }

    useEffect(() => {
        const getData = async () => {
            try {
                dispatch(setLoading())
                const data = await getItems()
                dispatch(setLoading())
                dispatch(addItems(data))
            } catch (e) {
                dispatch(setLoading())
                dispatch(setError())
            }
        }

        getData()
    }, [dispatch])

    return (
        <div className="App">
            {isLoading ? (
                <ScreenSpinner state="loading" />
            ) : isError ? (
                <Panel>
                    <Alert onClose={() => {}}>Ошибка</Alert>
                </Panel>
            ) : (
                <Panel>
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
                                    <Header>
                                        {`
                                        Итого: ${
                                            items &&
                                            Math.floor(
                                                items.reduce((acc, i) => {
                                                    return (
                                                        i.price * i.count + acc
                                                    )
                                                }, 0)
                                            )
                                        } руб.`}
                                    </Header>
                                </Group>
                            </SplitCol>
                        </SplitLayout>
                    </Div>
                </Panel>
            )}
        </div>
    )
}

export default App
