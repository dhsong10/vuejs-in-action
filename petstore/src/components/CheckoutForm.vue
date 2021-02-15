<template>
  <b-container fluid>
    <h3 class="font-weight-bold text-center my-3">정보를 입력하세요</h3>
    <b-form class="w-75 mx-auto" @submit.prevent="submitForm">
      <b-form-row>
        <b-col md="6">
          <b-form-group label="이름:" label-for="firstName">
            <b-form-input id="firstName" trim v-model="order.firstName" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="성:" label-for="lastName">
            <b-form-input id="lastName" trim v-model="order.lastName" />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-form-group label="주소:" label-for="address">
            <b-form-input id="address" trim v-model="order.address" />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-form-group label="도시:" label-for="city">
            <b-form-input id="city" trim v-model="order.city" />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col md="6">
          <b-form-group label="주:" label-for="state">
            <b-form-select id="state" v-model="order.state">
              <b-form-select-option
                v-for="(value, key) in states"
                :key="key"
                :value="value"
                >{{ key }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="우편번호:" label-for="zipCode">
            <b-form-input id="zipCode" number v-model="order.zipCode" />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col md="6">
          <b-form-group>
            <b-form-checkbox
              v-model="order.gift"
              value="선물로 보내기"
              unchecked-value="선물로 보내지 않기"
            >
              선물로 보내기 ?
            </b-form-checkbox>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <b-form-radio-group
              v-model="order.method"
              id="method-group"
              name="method-group"
            >
              <b-form-radio value="자택 주소">자택</b-form-radio>
              <b-form-radio value="회사 주소">회사</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col class="text-center">
          <b-button type="submit" variant="success">주문하기</b-button>
        </b-col>
      </b-form-row>
    </b-form>

    <b-jumbotron>
      <div class="w-50 mx-auto">
        <p v-for="(value, key) in order" :key="key">
          {{ key }} : {{ value | toString }}
        </p>
      </div>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        gift: '선물로 보내지 않기',
        method: '',
      },
      states: {
        AL: '알라바마',
        AR: '애리조나',
        CA: '캘리포니다',
        NV: '네바다',
      },
    };
  },
  methods: {
    submitForm() {
      this.$router.push('/');
    },
  },
  filters: {
    toString(value) {
      return value.toString();
    },
  },
};
</script>

<style></style>
