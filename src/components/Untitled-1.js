

        Movie Rating
        <Select style={{ width: "100%" }} placeholder="Rate the movie">
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>

                Movie Year
        <InputNumber
          style={{ width: "50", display: "block" }}
          min={1900}
          max={2020}
          defaultValue={2000}
          style={{ width: "100%" }}
        />