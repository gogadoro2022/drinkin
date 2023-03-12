import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeArea} from '../../component/util/SafeArea';

export default function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [error, setError] = useState({field: '', message: ''});

  const validate = () => {
    Keyboard.dismiss;
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    let loginError = {field: '', message: ''};
    if (email === '') {
      (loginError.field = 'email'),
        (loginError.message = '이메일을 입력해주세요');
      setError(...error, loginError);
    } else if (password === '') {
      (loginError.field = 'password'),
        (loginError.message = '비밀번호는 8자 이상이어야 합니다.');
      setError(...error, loginError);
    } else if (username === '') {
      (loginError.field = 'username'),
        (loginError.message = '닉네임을 입력해주시기 바랍니다.');
      setError(...error, loginError);
    }
  };

  return (
    <SafeArea>
      <View style={styles.signUpContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>이메일 주소</Text>
          <View
            style={[
              styles.inputTextContainer,
              error.field === 'email' && styles.errorInput,
            ]}>
            <TextInput
              style={styles.inputText}
              placeholder="이메일 주소"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          {error.field === 'email' && (
            <Text style={styles.error}>{error.message}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>비밀번호</Text>

          <View
            style={[
              styles.inputTextContainer,
              error.field === 'password' && styles.errorInput,
            ]}>
            <TextInput
              style={styles.inputText}
              placeholder="8자 이상"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          {error.field === 'password' && (
            <Text style={styles.error}>{error.message}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>닉네임</Text>

          <View
            style={[
              styles.inputTextContainer,
              error.field === 'username' && styles.errorInput,
            ]}>
            <TextInput
              style={styles.inputText}
              placeholder="파란우산"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          {error.field === 'username' && (
            <Text style={styles.error}>{error.message}</Text>
          )}
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.selecBtnContainer}
          onPress={() => navigation.navigate('recomand')}>
          <Text style={styles.selecBtnText}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  selecBtnContainer: {
    height: 52,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selecBtnText: {
    color: '#e7e7e7',
    fontWeight: 400,
    fontSize: 15,
  },
  signUpContainer: {
    margin: 16,
    flex: 1,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputTextContainer: {
    borderWidth: 2.5,
    borderColor: '#787674',
    marginTop: 12,
  },
  inputText: {
    // marginBottom: 8,
    // marginTop: 8,
    marginRight: 16,
    marginLeft: 16,
    height: 47,
  },
  label: {
    fontWeight: '600',
    fontSize: 17,
  },
  errorInput: {
    borderColor: '#FF6F42',
  },
  error: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF6F42',
    lineHeight: 18,
  },
});
