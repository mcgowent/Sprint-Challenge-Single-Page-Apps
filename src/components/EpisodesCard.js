import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function EpisodesCard(props) {
    // image={image}  
    //{ name, type, dimension, residents }

    return (
        <div className="card">
            <Card>
                <Card.Content header={props.data.name} />
                <Card.Content description={props.data.episode} />

                <Card.Content extra>
                    <Icon name='user' />
                    Cast: {props.data.characters.length}
                </Card.Content>
            </Card>
        </div>
    )
}
