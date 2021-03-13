import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, PlainText, InspectorControls, MediaPlaceholder, InnerBlocks } = wp.blockEditor
const { URLInputButton } = wp.blockEditor
const { Button, BaseControl, ToggleControl } = wp.components

const BLOCK_NAME = `${PLUGIN_NAME}/bloc-presentation`

registerBlockType(BLOCK_NAME, {
  title: __('bloc présentation'),
  description: __('bloc image and text'),
  icon: 'media-document',
  category: 'common',
  attributes: {
    title: {
      type: 'string'
    },
    underTitle: {
      type: 'string'
    },
    textLink:{
      type:'string'
    },
    link: {
      type: 'string'
    },
    imageUrl: {
      type: 'string' 
    },
    imageId: {
      type: 'integer'
    }    
  },

  edit: props => {
    const { attributes: { textColor, title, underTitle, textLink,link, imageUrl, imageId, switchDisplay }, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return (
    
        <section >
            
            <div > 
            
                 <PlainText
                  keepplaceholderonfocus='true'
                  placeholder={__('Title')}
                  className={className}
                  value={title}
                  onChange={(title) => {
                    setAttributes({ title })
                  }}
                />
                <PlainText
                  keepplaceholderonfocus='true'
                  placeholder={__('UnderTitle')}
                  className={className}
                  value={underTitle}
                  onChange={(underTitle) => {
                    setAttributes({ underTitle })
                  }}
                />
                <PlainText
                  keepplaceholderonfocus='true'
                  placeholder={__('TextLink')}
                  className={className}
                  value={textLink}
                  onChange={(textLink) => {
                    setAttributes({ textLink })
                  }}
                />
                <URLInputButton
                  className={__('link')}
                  url={link}
                  onChange={link => setAttributes({ link })}
                />
            </div>
            <div >
              {imageUrl ? (
                <img src={imageUrl} alt='' />
              ) : (
                <MediaPlaceholder
                  onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
                  allowedTypes={['image']}
                  multiple={false}
                  labels={{ title: 'The Image' }}
                />
              )}
            </div>
          </section>
      
    )
  },

  save: ({ attributes: { title, underTitle, textLink, link, imageUrl, imageId} }) => {
   
    return (
        <section className="presentation"> 
          <div className="presentation__text">
            <h2> {title} </h2>
            <p> {underTitle} </p>
            <a href={link}> {textLink} </a>
          </div>

          <div className="presentation__illustration">
          {imageUrl &&
            <img src={imageUrl} alt='' />}
          </div>
        </section>       
      )
  }
})
