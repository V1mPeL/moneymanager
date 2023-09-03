import { FC } from 'react'
import { Form } from 'react-router-dom'

interface ICatagoryModal {
    type: 'post' | 'patch'
    id?: number
    setVisibleModal: (visible: boolean) => void
}

const CategoryModal: FC<ICatagoryModal> = ({type, id, setVisibleModal}) => {
  return (
    <div className='w-full h-full fixed bottom-0 top-0 left-0 right-0 bg-black/50 flex justify-center items-center'>
        <Form 
            action='/categories'
            method={type}
            onSubmit={()=>setVisibleModal(false)}
            className='grid gap-2 w-[300px] p-5 rounded-md bg-slate-900'>
            <label htmlFor="tile">
                <small>Category title</small>
                <input className='input w-full' type="text" name='title' placeholder='Title'/>
                <input type="hidden" value={id} name="id"/>
            </label>

            <div className='flex items-center gap-2'>
                <button className='btn btn-green' type='submit'>
                    { type === 'patch' ? 'Save' : 'Create'}
                </button>
                <button 
                    onClick={() => setVisibleModal(false)}
                    className='btn btn-red'
                >
                    Close
                </button>
            </div>
        </Form>
    </div>
  )
}

export default CategoryModal