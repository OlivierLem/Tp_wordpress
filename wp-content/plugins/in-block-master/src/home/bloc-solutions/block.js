import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor
const { Button } = wp.components

const BLOCK_NAME = `${PLUGIN_NAME}/bloc-solutions`

registerBlockType(BLOCK_NAME, {
  title: __('bloc-solutions'),
  description: __('bloc solutions!'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    content: {
      type: 'array'
    }
  },

  edit: props => {
    const { attributes: { content = [] }, setAttributes, className } = props
    return (
      <>
        {content.map((value, index) => {
          return (
            <>
              <PlainText
                keepplaceholderonfocus
                placeholder={__('Demo')}
                value={value.title}
                onChange={(title) => {
                  const newContent = [...content]
                  newContent[index].title = title
                  setAttributes({ content: newContent })
                }}
              />
              <Button
                onClick={() => {
                  const newContent = [
                    ...content.slice(0, index),
                    ...content.slice(index + 1)
                  ]
                  setAttributes({ content: newContent })
                }}
              >{__('Supprimer')}
              </Button>
            </>
          )
        })}
        <Button
          onClick={() => {
            const newContent = [...content, {}]
            setAttributes({ content: newContent })
          }}
        >{__('Ajouter')}
        </Button>
      </>
    )
  },

  save: ({ attributes: {content=[] } }) => {
console.log(content);
    return(
        
        <section className="solutions">
            <img src="/themes/as-starter-theme/assets/img/tescontent.png" alt="tescontent"/>
            <p>{content.toString}</p>
            <p>Lorem ipsum dolor amet valem setum dolor vale oler sole batum duneil. Lorem ipsum dolor</p>
        </section>
    )
  }
})
