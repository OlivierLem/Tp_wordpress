import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/font-text`

registerBlockType(BLOCK_NAME, {
  title: __('Font text'),
  description: __('Bloc title and Bloc text'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    title: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    },
    paragraphe: {
        type: 'string'
    },
    paragrapheBis: {
      type: 'string'
  }
  },

  edit: props => {
    const { attributes: { title, subtitle, paragraphe, paragrapheBis }, setAttributes, className } = props
    return (

    <section className=''>
        <div className=''>
        <PlainText
            keepplaceholderonfocus='true'
            placeholder={__('Title')}
            className={className}
            value={title}
            onChange={(newTitle) => {
            setAttributes({ title: newTitle })
            }}
        />
        </div>
        <div className=''>
        <PlainText
            keepplaceholderonfocus='true'
            placeholder={__('Subtitle')}
            className={className}
            value={subtitle}
            onChange={(newSubtitle) => {
            setAttributes({ subtitle: newSubtitle })
            }}
        />
        <PlainText
            keepplaceholderonfocus='true'
            placeholder={__('Paragraphe')}
            className={className}
            value={paragraphe}
            onChange={(newParagraphe) => {
            setAttributes({ paragraphe: newParagraphe })
            }}
        />
        <PlainText
            keepplaceholderonfocus='true'
            placeholder={__('ParagrapheBis')}
            className={className}
            value={paragrapheBis}
            onChange={(newParagrapheBis) => {
            setAttributes({ paragrapheBis: newParagrapheBis })
            }}
        />
        </div>
    </section>    
    )
  },

  save: ({ attributes: { title, subtitle, paragraphe, paragrapheBis } }) => {
    
    return(
        <section className="fontText">
            <div className="fontText__title">
                <h1>{title}</h1>
            </div>
            <div className='fontText__main'>
                <h3>{subtitle}</h3>
                <p>{paragraphe}</p>
                <p>{paragrapheBis}</p>
            </div>
        </section>
    )
  }
})
