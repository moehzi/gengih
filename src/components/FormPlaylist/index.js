import React from 'react';

const FormPlaylist = ({
  handleSubmitPlaylist,
  handleChange,
  title,
  description,
}) => {
  return (
    <form
      onSubmit={handleSubmitPlaylist}
      style={{
        border: '2px solid black',
        padding: '1rem',
        borderRadius: '1rem',
        backgroundColor: '#252836',
        maxWidth: '800px',
      }}
    >
      <h1>Create playlist</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
          marginTop: '1rem',
        }}
      >
        <label
          style={{
            fontSize: '20px',
            fontWeight: 'medium',
            marginBottom: '1rem',
          }}
        >
          Title
        </label>
        <input
          className="input-search"
          style={{
            padding: '1rem',
            backgroundColor: '#060606',
          }}
          name="title"
          placeholder="Masukkan judul playlist"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1rem',
        }}
      >
        <label
          style={{
            fontSize: '20px',
            fontWeight: 'medium',
            marginBottom: '1rem',
          }}
        >
          Description
        </label>
        <input
          className="input-search"
          name="description"
          style={{
            fontSize: '1rem',
            padding: '1rem',
            backgroundColor: '#060606',
          }}
          value={description}
          placeholder="Masukkan judul playlist"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn-logout"
        style={{ fontSize: '1rem', marginTop: '1rem' }}
      >
        Simpan
      </button>
    </form>
  );
};

export default FormPlaylist;
