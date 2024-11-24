import MarkdownEditor from '@uiw/react-markdown-editor';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import Select from 'react-select';

export default function PublishMagazineArticle({ cancelPublish }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [tags, setTags] = useState('');
  const [newArticleValue, setNewArticleValue] = useState('**New article value');

  const categories = [
    { value: 'modern art technology', label: 'Modern art technology' },
    { value: 'second option', label: 'Second option' },
    { value: 'third option', label: 'Third option' },
  ];

  const customStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'inherit',
      padding: '',
      border: 'none',
      boxShadow: 'none',
      height: '46px',
    }),
  };

  const handleClearEditor = () => {
    setNewArticleValue('');
  };

  return (
    <section>
      <div data-color-mode='light' className='relative'>
        <MarkdownEditor
          height='500px'
          visible={false}
          value={newArticleValue}
          onChange={(value) => {
            setNewArticleValue(value);
          }}
          toolbars={['bold', 'link', 'image', 'underline']}
          toolbarBottom
        />
        <button
          aria-label='clear editor'
          className='absolute bottom-1 right-14'
          onClick={handleClearEditor}
        >
          <Trash size={19} color='#FF0000' />
        </button>
      </div>

      <div className='mb-3 mt-10 space-y-7'>
        <label className='flex justify-start items-center gap-1 shadow-sl rounded-sl px-4'>
          <span className='font-medium'>Category:</span>
          <Select
            options={categories}
            defaultValue={selectedCategory}
            onChange={setSelectedCategory}
            styles={customStyles}
            className='w-full'
          />
        </label>

        <label className='flex justify-start items-center gap-2 shadow-sl rounded-sl px-4'>
          <span className='font-medium'>Tags:</span>
          <input
            type='text'
            placeholder='#seo, #tech, #art, #modern'
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            className='h-[46px]'
          />
        </label>
      </div>

      <div className='mt-14 flex items-center justify-between'>
        <button
          className='capitalize py-2 px-10 rounded-sl text-primaryColor border border-primaryColor transition-all ease-linear duration-300 hover:opacity-70'
          onClick={cancelPublish}
        >
          cancel
        </button>
        <button className='capitalize py-2 px-10 rounded-sl text-white bg-primaryColor shadow-sl transition-all ease-linear duration-300 hover:opacity-80'>
          next
        </button>
      </div>
    </section>
  );
}
