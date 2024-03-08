package com.a102f.lighthouse.auth.service;

import com.a102f.lighthouse.auth.controller.dto.KakaoOAuthAccessTokenRequest;
import com.a102f.lighthouse.auth.controller.dto.KakaoOAuthMemberInfoResponse;
import com.a102f.lighthouse.auth.controller.dto.OAuthAccessTokenResponse;
import com.a102f.lighthouse.auth.controller.dto.OAuthMemberInfoResponse;
import com.a102f.lighthouse.common.enums.RedirectUri;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Component
public class KakaoOAuthClient implements OAuthClient {

    private static final String ACCESS_TOKEN_URL = "https://kauth.kakao.com/oauth/token";
    private static final String MEMBER_INFO_URL = "https://kapi.kakao.com/v2/user/me";
    private static final RestTemplate restTemplate = new RestTemplate();
    private final String clientId;

    public KakaoOAuthClient(@Value("${spring.security.oauth2.client.registration.kakao.client-id}") String clientId) {
        this.clientId = clientId;
    }

    @Override
    public OAuthAccessTokenResponse getAccessToken(String code) {
        // 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        // 본문 설정
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("redirect_uri", RedirectUri.KAKAO_OAUTH.getUri());
        params.add("code", code);

        // HttpEntity 설정
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        // 요청 보내기
        return restTemplate.postForObject(ACCESS_TOKEN_URL, request, OAuthAccessTokenResponse.class);
    }


    @Override
    public KakaoOAuthMemberInfoResponse getMemberInfo(String accessToken) {
        // 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        // HttpEntity 설정
        HttpEntity<?> entity = new HttpEntity<>(headers);

        // 요청 보내기
        return restTemplate.exchange(
                MEMBER_INFO_URL,
                HttpMethod.GET,
                entity,
                KakaoOAuthMemberInfoResponse.class
        ).getBody();
    }

}
