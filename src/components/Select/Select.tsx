import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './select.module.css'


type SelectType = {
    title: string
    value: any
}

type SelectProps = {
    value?: any
    onChange: (value: any) => void
    items: SelectType[]
}

export function Select(props: SelectProps) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)

    const onItemsClick = (value: any) => {
        return (
            props.onChange(value),
        toggleItems()
    )
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value.value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

                {
                    active &&
                    <div className={styles.items}>
                        {
                            props.items.map(i =>
                                <div
                                    onMouseEnter={() => {
                                        setHoveredElementValue(i.value)
                                    }}
                                    className={styles.item + ' ' + (hoveredItem === i ? styles.select : '')}
                                    key={i.value}
                                    onClick={() => {
                                        onItemsClick(i.value)
                                    }
                                    }

                                >{i.title}</div>)

                        }

                    </div>
                }
            </div>
        </>
    )
}

