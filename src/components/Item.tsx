import React from 'react'
import { Div, ButtonGroup, IconButton, Image, RichCell } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { Icon16Add, Icon16Minus, Icon20DeleteOutline } from '@vkontakte/icons'
import { Item as IItem } from '../interfaces/Item'
import { useDispatch } from 'react-redux'
import { addItem, removeItem, deleteItem } from '../redux/slices/itemsSlice'

type ItemProps = {
    item: IItem
}

const Item: React.FC<ItemProps> = ({ item: { image, rating: { count: totalCount }, price, title, description, count, id } }) => {
    const dispatch = useDispatch();
    const handleRemoveItem = () => dispatch(removeItem(id));
    const handleAddItem = () => dispatch(addItem(id));
    const handleDeleteItem = () => dispatch(deleteItem(id));

    return (
        <div>
            <RichCell
                before={<Image src={image} />}
                text={`${description}`}
                caption={`В наличии: ${totalCount}`}
                after={`${price} руб.`}
                actions={
                    <Div style={{ display: 'flex', alignItems: 'center' }}>
                        <ButtonGroup
                            mode="horizontal"
                            style={{ marginRight: '48px' }}
                        >
                            <IconButton onClick={handleRemoveItem}
                            disabled={count <= 1 }
                            >
                                <Icon16Minus width={16} height={16} />
                            </IconButton>
                            <Div>{count}</Div>
                            <IconButton onClick={handleAddItem}
                            disabled={count === 10 }
                            >
                                <Icon16Add width={16} height={16} />
                            </IconButton>
                        </ButtonGroup>
                        <IconButton onClick={handleDeleteItem}>
                            <Icon20DeleteOutline></Icon20DeleteOutline>
                        </IconButton>
                    </Div>
                }
            >
                {title}
            </RichCell>
        </div>
    )
}

export default Item
